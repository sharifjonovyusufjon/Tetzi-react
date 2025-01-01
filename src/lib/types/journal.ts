import { JournalCategory, JournalStatus } from "../enums/journal.enum";

export interface Journal {
  _id: string;
  journalStatus: JournalStatus;
  journalCategory: JournalCategory;
  journalTitle: string;
  journalContext: string;
  journalImage?: string;
  journalComments: number;
  journalLikes: number;
  journalViews: number;
  createdAt?: Date;
  updatedAt?: Date;

  /* from aggregate */
  journalData?: [Comment];
}

export interface JournalInQuiry {
  page: number;
  limit: number;
  search?: string;
}

export interface UpdateJournalInput {
  _id: string;
  journalStatus?: JournalStatus;
  journalCategory?: JournalCategory;
  journalTitle?: string;
  journalContext?: string;
  journalImage?: string;
}
