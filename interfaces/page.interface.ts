export interface TopPageModel {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: TopPageAdvantage[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  hh: TopPageHh;
  qas: any[];
  addresses: any[];
  categoryOn: string;
  blog: TopPageBlog;
  sravnikus: TopPageSravnikus;
  learningclub: TopPageLearningclub;
}

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageAdvantage {
  title: string;
  description: string;
  _id: string;
}

export interface TopPageHh {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: string;
  _id: string;
}

interface TopPageBlog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

interface TopPageSravnikus {
  metaTitle: string;
  metaDescription: string;
  qas: any[];
  _id: string;
}

interface TopPageLearningclub {
  metaTitle: string;
  metaDescription: string;
  qas: any[];
  _id: string;
}
