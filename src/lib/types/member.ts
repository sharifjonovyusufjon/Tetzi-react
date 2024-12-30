import {
  MemberCountry,
  MemberState,
  MemberStatus,
  MemberType,
} from "../enums/member.enum";

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberFirstName: string;
  memberLastName: string;
  memberEmail: string;
  memberPhone: string;
  memberPassword: string;
  memberImage?: string;
  memberAddress: string[];
  memberCity: string;
  memberCountry: MemberCountry;
  memberState?: string;
  memberPostCode: number;
  memberPoints?: number;
}

export interface Member {
  _id: string;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberFirstName: string;
  memberLastName: string;
  memberEmail: string;
  memberPhone: string;
  memberPassword?: string;
  memberImage?: string;
  memberAddress: string[];
  memberCity: string;
  memberCountry: MemberCountry;
  memberState: string;
  memberPostCode: number;
  memberPoints: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdateMemberInput {
  memberFirstName?: string;
  memberLastName?: string;
  memberEmail?: string;
  memberPhone?: string;
  memberImage?: string;
  memberAddress?: string[];
  memberCity?: string;
  memberCountry?: MemberCountry;
  memberState?: MemberState;
  memberPostCode?: number;
}

export interface LoginInput {
  memberEmail: string;
  memberPassword: string;
}
