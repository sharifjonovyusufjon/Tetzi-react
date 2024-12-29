
import { CommentGroup } from "../enums/comment.enum";

export interface CommentInput {
  commentGroup: CommentGroup;
  commentContext: string;
  memberId: string;
  commentRefId: string;
}

export interface Comment {
  commentGroup: CommentGroup;
  commentContext: string;
  memberId: string;
  commentRefId: string;
}
