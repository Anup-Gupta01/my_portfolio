import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import {
  personalInfo as defaultPersonalInfo,
  socialLinks as defaultSocialLinks,
  skills as defaultSkills,
  heroAchievements as defaultHeroAchievements,
  projects as defaultProjects,
  services as defaultServices,
  stats as defaultStats,
  navItems as defaultNavItems,
} from '../data/portfolio'

// ---- Types ----
export type PersonalInfo = typeof defaultPersonalInfo
export type SocialLinks = typeof defaultSocialLinks
export type Skills = typeof defaultSkills
export type HeroAchievements = typeof defaultHeroAchievements
export type Projects = typeof defaultProjects
export type Services = typeof defaultServices
export type Stats = typeof defaultStats
export type NavItems = typeof defaultNavItems

export interface PortfolioData {
  personalInfo: PersonalInfo
  socialLinks: SocialLinks
  skills: Skills
  heroAchievements: HeroAchievements
  projects: Projects
  services: Services
  stats: Stats
  navItems: NavItems
}

interface PortfolioContextValue {
  data: PortfolioData
  updatePersonalInfo: (info: PersonalInfo) => void
  updateSocialLinks: (links: SocialLinks) => void
  updateSkills: (skills: Skills) => void
  updateHeroAchievements: (achievements: HeroAchievements) => void
  updateProjects: (projects: Projects) => void
  updateServices: (services: Services) => void
  updateStats: (stats: Stats) => void
  updateNavItems: (navItems: NavItems) => void
  resetToDefaults: () => void
}

const STORAGE_KEY = 'portfolio_data_v1'

const defaultData: PortfolioData = {
  personalInfo: defaultPersonalInfo,
  socialLinks: defaultSocialLinks,
  skills: defaultSkills,
  heroAchievements: defaultHeroAchievements,
  projects: defaultProjects,
  services: defaultServices,
  stats: defaultStats,
  navItems: defaultNavItems,
}

function loadFromStorage(): PortfolioData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultData
    const parsed = JSON.parse(raw)
    // Merge with defaults to handle any new fields added later
    return {
      personalInfo: { ...defaultData.personalInfo, ...parsed.personalInfo },
      socialLinks: parsed.socialLinks ?? defaultData.socialLinks,
      skills: parsed.skills ?? defaultData.skills,
      heroAchievements: parsed.heroAchievements ?? defaultData.heroAchievements,
      projects: parsed.projects ?? defaultData.projects,
      services: parsed.services ?? defaultData.services,
      stats: parsed.stats ?? defaultData.stats,
      navItems: parsed.navItems ?? defaultData.navItems,
    }
  } catch {
    return defaultData
  }
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(loadFromStorage)

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const updatePersonalInfo = (info: PersonalInfo) =>
    setData(d => ({ ...d, personalInfo: info }))
  const updateSocialLinks = (links: SocialLinks) =>
    setData(d => ({ ...d, socialLinks: links }))
  const updateSkills = (skills: Skills) =>
    setData(d => ({ ...d, skills }))
  const updateHeroAchievements = (heroAchievements: HeroAchievements) =>
    setData(d => ({ ...d, heroAchievements }))
  const updateProjects = (projects: Projects) =>
    setData(d => ({ ...d, projects }))
  const updateServices = (services: Services) =>
    setData(d => ({ ...d, services }))
  const updateStats = (stats: Stats) =>
    setData(d => ({ ...d, stats }))
  const updateNavItems = (navItems: NavItems) =>
    setData(d => ({ ...d, navItems }))
  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY)
    setData(defaultData)
  }

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updatePersonalInfo,
        updateSocialLinks,
        updateSkills,
        updateHeroAchievements,
        updateProjects,
        updateServices,
        updateStats,
        updateNavItems,
        resetToDefaults,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error('usePortfolio must be used inside <PortfolioProvider>')
  return ctx
}
