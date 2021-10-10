import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type AddModeratorInput = {
  application_id: Scalars['String'];
  moderator_id: Scalars['String'];
};

export type ApplicationModel = {
  __typename?: 'ApplicationModel';
  adult_content: Scalars['Boolean'];
  allow_images_and_videos_on_comments: Scalars['Boolean'];
  application_name: Scalars['String'];
  application_owner: UserModel;
  application_owner_id: Scalars['String'];
  auth_secret: Scalars['String'];
  authenticated_users: Array<UserModel>;
  authenticated_users_ids: Array<Scalars['String']>;
  category: Category;
  comment_policy_summary?: Maybe<Scalars['String']>;
  comment_policy_url?: Maybe<Scalars['String']>;
  comments: Array<CommentModel>;
  cost: Scalars['Float'];
  created_at: Scalars['DateTime'];
  default_avatar_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_comments_when_flagged: Scalars['Boolean'];
  email_mods_when_comments_flagged: Scalars['Boolean'];
  id: Scalars['String'];
  language: Language;
  links_in_comments: Scalars['Boolean'];
  moderators: Array<UserModel>;
  moderators_ids: Array<Scalars['String']>;
  plan: Scalars['String'];
  pre_comment_moderation: Pre_Comment_Moderation;
  renewal?: Maybe<Scalars['DateTime']>;
  short_name: Scalars['String'];
  theme: Theme;
  threads: Array<ThreadModel>;
  updated_at: Scalars['DateTime'];
  website_url?: Maybe<Scalars['String']>;
};

export type ApproveCommentsInput = {
  comment_ids: Array<Scalars['String']>;
};

export enum Category {
  Tech = 'TECH'
}

export type CommentModel = {
  __typename?: 'CommentModel';
  _count: CountModel;
  application_id: Scalars['String'];
  author: UserModel;
  created_at: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  down_vote: Array<RatingModel>;
  flagged: Scalars['Boolean'];
  id: Scalars['String'];
  json_body: Array<Scalars['JSONObject']>;
  parent_id?: Maybe<Scalars['String']>;
  pending: Scalars['Boolean'];
  plain_text_body: Scalars['String'];
  private_information: Scalars['Boolean'];
  replied_to_id?: Maybe<Scalars['String']>;
  replied_to_user?: Maybe<UserModel>;
  replies: Array<CommentModel>;
  thread_id: Scalars['String'];
  threatening_content: Scalars['Boolean'];
  up_vote: Array<RatingModel>;
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type CountModel = {
  __typename?: 'CountModel';
  down_vote: Scalars['Int'];
  replies: Scalars['Int'];
  up_vote: Scalars['Int'];
};

export type CreateApplicationInput = {
  adult_content: Scalars['Boolean'];
  application_name: Scalars['String'];
  category: Category;
  comment_policy_summary?: Maybe<Scalars['String']>;
  comment_policy_url?: Maybe<Scalars['String']>;
  default_avatar_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  language: Language;
  theme: Theme;
  website_url?: Maybe<Scalars['String']>;
};

export type CreateCommentInput = {
  application_id: Scalars['String'];
  json_body: Scalars['JSONObject'];
  plain_text_body: Scalars['String'];
  thread_id: Scalars['String'];
};

export type CreateOrderInput = {
  /** Total cost */
  total_price: Scalars['Float'];
};

export type CreateReplyCommentInput = {
  application_id: Scalars['String'];
  json_body: Scalars['JSONObject'];
  parent_id: Scalars['String'];
  plain_text_body: Scalars['String'];
  replied_to_id: Scalars['String'];
  thread_id: Scalars['String'];
};

export type CreateReportInput = {
  comment_id: Scalars['String'];
  report: Report_Reason;
};

export type DeleteManyCommentsInput = {
  comment_ids: Array<Scalars['String']>;
  permanent_delete: Scalars['Boolean'];
};

export type DeleteManyNotificationsInput = {
  notifications_ids: Array<Scalars['String']>;
};

export type DeleteNotificationInput = {
  id: Scalars['String'];
};

export type FetchAllComments = {
  __typename?: 'FetchAllComments';
  comments: Array<CommentModel>;
  comments_count: Scalars['Int'];
};

export type FetchCommentByApplicationName = {
  __typename?: 'FetchCommentByApplicationName';
  comments: Array<CommentModel>;
  comments_count: Scalars['Float'];
};

export type FetchCommentByThreadIdInput = {
  limit: Scalars['Float'];
  skip: Scalars['Float'];
  sort: Sort;
  thread_id: Scalars['String'];
};

export type FetchCommentByThreadIdResponse = {
  __typename?: 'FetchCommentByThreadIdResponse';
  comments: Array<CommentModel>;
  comments_count: Scalars['Float'];
};

export type FetchCommentsByApplicationId = {
  __typename?: 'FetchCommentsByApplicationId';
  comments: Array<CommentModel>;
  comments_count: Scalars['Float'];
};

export type FetchCommentsByApplicationIdInput = {
  application_id: Scalars['String'];
  limit: Scalars['Float'];
  skip: Scalars['Float'];
  sort: Sort;
};

export type FetchCommentsByApplicationNameInput = {
  application_name: Scalars['String'];
  limit: Scalars['Float'];
  skip: Scalars['Float'];
  sort: Sort;
  where: Where;
};

export type FetchNotificationsByUserIdInput = {
  user_id: Scalars['String'];
};

export type FetchThreadCommentsById = {
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  sort?: Maybe<Sort>;
};

export type FindOrCreateOneThreadInput = {
  /** Application ID */
  application_id: Scalars['String'];
  /** Thread Title */
  title?: Maybe<Scalars['String']>;
  /** Thread website url */
  website_url: Scalars['String'];
};

export enum Language {
  English = 'ENGLISH'
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  message: Scalars['String'];
  refresh_token: Scalars['String'];
  success: Scalars['Boolean'];
  token: Scalars['String'];
  user: UserModel;
};

export type Mutation = {
  __typename?: 'Mutation';
  add_application_moderator: ApplicationModel;
  approve_comments: StandardResponseModel;
  block_user: StandardResponseModel;
  confirm_user: StandardResponseModel;
  create_application: ApplicationModel;
  create_comment: CommentModel;
  create_order: StandardResponseModel;
  create_reply_comment: CommentModel;
  create_report: StandardResponseModel;
  delete_comment: StandardResponseModel;
  delete_many_comments: StandardResponseModel;
  delete_many_notifications: StandardResponse;
  delete_notification: StandardResponse;
  delete_user: StandardResponseModel;
  down_vote_comment: CommentModel;
  forgot_password: StandardResponseModel;
  login_user: LoginResponse;
  logout_user: StandardResponseModel;
  regenerate_new_auth_secret: ApplicationModel;
  register_user: StandardResponseModel;
  remove_application: StandardResponseModel;
  remove_application_moderator: ApplicationModel;
  reset_password: StandardResponseModel;
  unblock_user: StandardResponseModel;
  up_vote_comment: CommentModel;
  update_application: ApplicationModel;
  update_application_comment_rules: ApplicationModel;
  update_comment: CommentModel;
};


export type MutationAdd_Application_ModeratorArgs = {
  addModeratorInput: AddModeratorInput;
};


export type MutationApprove_CommentsArgs = {
  approveCommentsInput: ApproveCommentsInput;
};


export type MutationBlock_UserArgs = {
  user_id: Scalars['String'];
};


export type MutationConfirm_UserArgs = {
  token: Scalars['String'];
};


export type MutationCreate_ApplicationArgs = {
  createApplicationInput: CreateApplicationInput;
};


export type MutationCreate_CommentArgs = {
  CreateCommentInput: CreateCommentInput;
};


export type MutationCreate_OrderArgs = {
  CreateOrderInput: CreateOrderInput;
};


export type MutationCreate_Reply_CommentArgs = {
  CreateReplyCommentInput: CreateReplyCommentInput;
};


export type MutationCreate_ReportArgs = {
  createReportInput: CreateReportInput;
};


export type MutationDelete_CommentArgs = {
  commentId: Scalars['String'];
};


export type MutationDelete_Many_CommentsArgs = {
  deleteManyCommentsInput: DeleteManyCommentsInput;
};


export type MutationDelete_Many_NotificationsArgs = {
  deleteManyNotifications: DeleteManyNotificationsInput;
};


export type MutationDelete_NotificationArgs = {
  deleteNotification: DeleteNotificationInput;
};


export type MutationDelete_UserArgs = {
  email: Scalars['String'];
};


export type MutationDown_Vote_CommentArgs = {
  comment_id: Scalars['String'];
};


export type MutationForgot_PasswordArgs = {
  email: Scalars['String'];
  redirect_url?: Maybe<Scalars['String']>;
};


export type MutationLogin_UserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegenerate_New_Auth_SecretArgs = {
  application_id: Scalars['String'];
};


export type MutationRegister_UserArgs = {
  application_id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  redirect_url?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};


export type MutationRemove_ApplicationArgs = {
  id: Scalars['String'];
};


export type MutationRemove_Application_ModeratorArgs = {
  removeModeratorInput: RemoveModeratorInput;
};


export type MutationReset_PasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUnblock_UserArgs = {
  user_id: Scalars['String'];
};


export type MutationUp_Vote_CommentArgs = {
  comment_id: Scalars['String'];
};


export type MutationUpdate_ApplicationArgs = {
  updateApplicationInput: UpdateApplicationInput;
};


export type MutationUpdate_Application_Comment_RulesArgs = {
  updateApplicationCommentRulesInput: UpdateApplicationCommentRulesInput;
};


export type MutationUpdate_CommentArgs = {
  UpdateCommentInput: UpdateCommentInput;
};

export type Notification = {
  __typename?: 'Notification';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
};

export enum Pre_Comment_Moderation {
  All = 'ALL',
  NewComments = 'NEW_COMMENTS',
  None = 'NONE'
}

export type Query = {
  __typename?: 'Query';
  current_user: UserModel;
  fetch_all_applications: Array<ApplicationModel>;
  fetch_all_threads: Array<ThreadModel>;
  fetch_applications_by_owner_id: Array<ApplicationModel>;
  fetch_comments: FetchAllComments;
  fetch_comments_by_application_id: FetchCommentsByApplicationId;
  fetch_comments_by_application_name: FetchCommentByApplicationName;
  fetch_comments_by_thread_id: FetchCommentByThreadIdResponse;
  fetch_notifications_by_user_id: Notification;
  fetch_users: Array<UserModel>;
  find_one_application_by_id: ApplicationModel;
  find_one_application_by_name: ApplicationModel;
  find_one_thread_or_create_one: ThreadModel;
  resend_email_code: StandardResponseModel;
  search_user_by_email: UserModel;
};


export type QueryFetch_Comments_By_Application_IdArgs = {
  fetchCommentsByApplicationId: FetchCommentsByApplicationIdInput;
};


export type QueryFetch_Comments_By_Application_NameArgs = {
  fetchCommentsByApplicationName: FetchCommentsByApplicationNameInput;
};


export type QueryFetch_Comments_By_Thread_IdArgs = {
  fetchCommentByThreadIdInput: FetchCommentByThreadIdInput;
};


export type QueryFetch_Notifications_By_User_IdArgs = {
  fetchNotificationsByUserIdInput: FetchNotificationsByUserIdInput;
};


export type QueryFind_One_Application_By_IdArgs = {
  id: Scalars['String'];
};


export type QueryFind_One_Application_By_NameArgs = {
  name: Scalars['String'];
};


export type QueryFind_One_Thread_Or_Create_OneArgs = {
  findOrCreateOneThreadInput: FindOrCreateOneThreadInput;
};


export type QueryResend_Email_CodeArgs = {
  email: Scalars['String'];
  redirect_url: Scalars['String'];
};


export type QuerySearch_User_By_EmailArgs = {
  email: Scalars['String'];
};

export enum Report_Reason {
  Disagree = 'DISAGREE',
  InappropriateProfile = 'INAPPROPRIATE_PROFILE',
  PrivateInformation = 'PRIVATE_INFORMATION',
  Spam = 'SPAM',
  ThreateningContent = 'THREATENING_CONTENT'
}

export type RatingModel = {
  __typename?: 'RatingModel';
  author_id: Scalars['String'];
  id: Scalars['String'];
};

export type RemoveModeratorInput = {
  application_id: Scalars['String'];
  moderator_id: Scalars['String'];
};

export type StandardResponse = {
  __typename?: 'StandardResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type StandardResponseModel = {
  __typename?: 'StandardResponseModel';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export enum Theme {
  Auto = 'AUTO',
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type ThreadModel = {
  __typename?: 'ThreadModel';
  application_id: Scalars['String'];
  /** UUID for Thread */
  id: Scalars['String'];
  pinned_comment: CommentModel;
  pinned_comment_id: Scalars['String'];
  thread_comments: FetchCommentByThreadIdResponse;
  title: Scalars['String'];
  website_url: Scalars['String'];
};


export type ThreadModelThread_CommentsArgs = {
  FetchThreadCommentsById: FetchThreadCommentsById;
};

export type UpdateApplicationCommentRulesInput = {
  allow_images_and_videos_on_comments: Scalars['Boolean'];
  application_name: Scalars['String'];
  display_comments_when_flagged: Scalars['Boolean'];
  email_mods_when_comments_flagged: Scalars['Boolean'];
  links_in_comments: Scalars['Boolean'];
  pre_comment_moderation: Pre_Comment_Moderation;
};

export type UpdateApplicationInput = {
  adult_content: Scalars['Boolean'];
  application_name: Scalars['String'];
  category: Category;
  comment_policy_summary?: Maybe<Scalars['String']>;
  comment_policy_url?: Maybe<Scalars['String']>;
  default_avatar_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  language: Language;
  theme: Theme;
  website_url?: Maybe<Scalars['String']>;
};

export type UpdateCommentInput = {
  comment_id: Scalars['String'];
  json_body: Scalars['JSONObject'];
  plain_text_body: Scalars['String'];
};

export type UserModel = {
  __typename?: 'UserModel';
  applications_joined_ids: Array<Scalars['String']>;
  blocked_users: Array<UserModel>;
  confirmed: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  last_active: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  user_role: Scalars['String'];
  username: Scalars['String'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC',
  TopVotes = 'TOP_VOTES'
}

export enum Where {
  All = 'ALL',
  Appoved = 'APPOVED',
  Deleted = 'DELETED',
  Pending = 'PENDING',
  Spam = 'SPAM'
}

export type FetchUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUsersQuery = { __typename?: 'Query', fetch_users: Array<{ __typename?: 'UserModel', id: string, username: string, email: string, confirmed: boolean }> };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', current_user: { __typename?: 'UserModel', id: string, username: string } };

export type SearchUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type SearchUserByEmailQuery = { __typename?: 'Query', search_user_by_email: { __typename?: 'UserModel', id: string, email: string, username: string } };

export type ApplicationFieldsFragment = { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> };

export type FetchApplicationByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FetchApplicationByNameQuery = { __typename?: 'Query', find_one_application_by_name: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type CommentFragmentFragment = { __typename?: 'CommentModel', id: string, plain_text_body: string, application_id: string, author: { __typename?: 'UserModel', id: string, username: string } };

export type FetchCommentsByApplicationIdQueryVariables = Exact<{
  fetchCommentsByApplicationIdInput: FetchCommentsByApplicationIdInput;
}>;


export type FetchCommentsByApplicationIdQuery = { __typename?: 'Query', fetch_comments_by_application_id: { __typename?: 'FetchCommentsByApplicationId', comments_count: number, comments: Array<{ __typename?: 'CommentModel', id: string, plain_text_body: string, application_id: string, author: { __typename?: 'UserModel', id: string, username: string } }> } };

export type FetchCommentsByApplicationNameQueryVariables = Exact<{
  fetchCommentsByApplicationName: FetchCommentsByApplicationNameInput;
}>;


export type FetchCommentsByApplicationNameQuery = { __typename?: 'Query', fetch_comments_by_application_name: { __typename?: 'FetchCommentByApplicationName', comments_count: number, comments: Array<{ __typename?: 'CommentModel', id: string, plain_text_body: string, application_id: string, author: { __typename?: 'UserModel', id: string, username: string } }> } };

export type FetchApplicationsByOwnerQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchApplicationsByOwnerQuery = { __typename?: 'Query', fetch_all_applications: Array<{ __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> }> };

export type FindOneApplicationByIdQueryVariables = Exact<{
  findOneApplicationByIdId: Scalars['String'];
}>;


export type FindOneApplicationByIdQuery = { __typename?: 'Query', find_one_application_by_id: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type CreateApplicationMutationVariables = Exact<{
  createApplicationInput: CreateApplicationInput;
}>;


export type CreateApplicationMutation = { __typename?: 'Mutation', create_application: { __typename?: 'ApplicationModel', application_name: string } };

export type RemoveApplicationModeratorMutationVariables = Exact<{
  removeModeratorInput: RemoveModeratorInput;
}>;


export type RemoveApplicationModeratorMutation = { __typename?: 'Mutation', remove_application_moderator: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type AddApplicationModeratorMutationVariables = Exact<{
  addModeratorInput: AddModeratorInput;
}>;


export type AddApplicationModeratorMutation = { __typename?: 'Mutation', add_application_moderator: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type DeleteManyCommentsMutationVariables = Exact<{
  deleteManyCommentsInput: DeleteManyCommentsInput;
}>;


export type DeleteManyCommentsMutation = { __typename?: 'Mutation', delete_many_comments: { __typename?: 'StandardResponseModel', success: boolean, message: string } };

export type UpdateApplicationCommentRulesMutationVariables = Exact<{
  updateApplicationCommentRulesInput: UpdateApplicationCommentRulesInput;
}>;


export type UpdateApplicationCommentRulesMutation = { __typename?: 'Mutation', update_application_comment_rules: { __typename?: 'ApplicationModel', id: string, application_name: string, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean } };

export type UpdateApplicationMutationVariables = Exact<{
  updateApplicationInput: UpdateApplicationInput;
}>;


export type UpdateApplicationMutation = { __typename?: 'Mutation', update_application: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type ApproveCommentMutationVariables = Exact<{
  approveCommentsInput: ApproveCommentsInput;
}>;


export type ApproveCommentMutation = { __typename?: 'Mutation', approve_comments: { __typename?: 'StandardResponseModel', success: boolean, message: string } };

export type ConfirmUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmUserMutation = { __typename?: 'Mutation', confirm_user: { __typename?: 'StandardResponseModel', success: boolean, message: string } };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  redirect_url?: Maybe<Scalars['String']>;
  username: Scalars['String'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register_user: { __typename?: 'StandardResponseModel', success: boolean, message: string } };

export type FetchNotificationsByUserIdQueryVariables = Exact<{
  fetchNotificationsByUserIdInput: FetchNotificationsByUserIdInput;
}>;


export type FetchNotificationsByUserIdQuery = { __typename?: 'Query', fetch_notifications_by_user_id: { __typename?: 'Notification', id: string, created_at: any, updated_at: any, message: string, url: string } };

export const ApplicationFieldsFragmentDoc = gql`
    fragment ApplicationFields on ApplicationModel {
  id
  application_name
  plan
  cost
  renewal
  created_at
  updated_at
  application_name
  links_in_comments
  email_mods_when_comments_flagged
  allow_images_and_videos_on_comments
  pre_comment_moderation
  display_comments_when_flagged
  website_url
  category
  language
  theme
  adult_content
  comment_policy_url
  comment_policy_summary
  description
  default_avatar_url
  application_owner {
    id
  }
  moderators {
    email
    username
    id
  }
}
    `;
export const CommentFragmentFragmentDoc = gql`
    fragment CommentFragment on CommentModel {
  id
  plain_text_body
  application_id
  author {
    id
    username
  }
}
    `;
export const FetchUsersDocument = gql`
    query FetchUsers {
  fetch_users {
    id
    username
    email
    confirmed
  }
}
    `;

/**
 * __useFetchUsersQuery__
 *
 * To run a query within a React component, call `useFetchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchUsersQuery(baseOptions?: Apollo.QueryHookOptions<FetchUsersQuery, FetchUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchUsersQuery, FetchUsersQueryVariables>(FetchUsersDocument, options);
      }
export function useFetchUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUsersQuery, FetchUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchUsersQuery, FetchUsersQueryVariables>(FetchUsersDocument, options);
        }
export type FetchUsersQueryHookResult = ReturnType<typeof useFetchUsersQuery>;
export type FetchUsersLazyQueryHookResult = ReturnType<typeof useFetchUsersLazyQuery>;
export type FetchUsersQueryResult = Apollo.QueryResult<FetchUsersQuery, FetchUsersQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  current_user {
    id
    username
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const SearchUserByEmailDocument = gql`
    query SearchUserByEmail($email: String!) {
  search_user_by_email(email: $email) {
    id
    email
    username
  }
}
    `;

/**
 * __useSearchUserByEmailQuery__
 *
 * To run a query within a React component, call `useSearchUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSearchUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<SearchUserByEmailQuery, SearchUserByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUserByEmailQuery, SearchUserByEmailQueryVariables>(SearchUserByEmailDocument, options);
      }
export function useSearchUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUserByEmailQuery, SearchUserByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUserByEmailQuery, SearchUserByEmailQueryVariables>(SearchUserByEmailDocument, options);
        }
export type SearchUserByEmailQueryHookResult = ReturnType<typeof useSearchUserByEmailQuery>;
export type SearchUserByEmailLazyQueryHookResult = ReturnType<typeof useSearchUserByEmailLazyQuery>;
export type SearchUserByEmailQueryResult = Apollo.QueryResult<SearchUserByEmailQuery, SearchUserByEmailQueryVariables>;
export const FetchApplicationByNameDocument = gql`
    query FetchApplicationByName($name: String!) {
  find_one_application_by_name(name: $name) {
    ...ApplicationFields
  }
}
    ${ApplicationFieldsFragmentDoc}`;

/**
 * __useFetchApplicationByNameQuery__
 *
 * To run a query within a React component, call `useFetchApplicationByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchApplicationByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchApplicationByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useFetchApplicationByNameQuery(baseOptions: Apollo.QueryHookOptions<FetchApplicationByNameQuery, FetchApplicationByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchApplicationByNameQuery, FetchApplicationByNameQueryVariables>(FetchApplicationByNameDocument, options);
      }
export function useFetchApplicationByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchApplicationByNameQuery, FetchApplicationByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchApplicationByNameQuery, FetchApplicationByNameQueryVariables>(FetchApplicationByNameDocument, options);
        }
export type FetchApplicationByNameQueryHookResult = ReturnType<typeof useFetchApplicationByNameQuery>;
export type FetchApplicationByNameLazyQueryHookResult = ReturnType<typeof useFetchApplicationByNameLazyQuery>;
export type FetchApplicationByNameQueryResult = Apollo.QueryResult<FetchApplicationByNameQuery, FetchApplicationByNameQueryVariables>;
export const FetchCommentsByApplicationIdDocument = gql`
    query FetchCommentsByApplicationId($fetchCommentsByApplicationIdInput: FetchCommentsByApplicationIdInput!) {
  fetch_comments_by_application_id(
    fetchCommentsByApplicationId: $fetchCommentsByApplicationIdInput
  ) {
    comments_count
    comments {
      ...CommentFragment
    }
  }
}
    ${CommentFragmentFragmentDoc}`;

/**
 * __useFetchCommentsByApplicationIdQuery__
 *
 * To run a query within a React component, call `useFetchCommentsByApplicationIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCommentsByApplicationIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCommentsByApplicationIdQuery({
 *   variables: {
 *      fetchCommentsByApplicationIdInput: // value for 'fetchCommentsByApplicationIdInput'
 *   },
 * });
 */
export function useFetchCommentsByApplicationIdQuery(baseOptions: Apollo.QueryHookOptions<FetchCommentsByApplicationIdQuery, FetchCommentsByApplicationIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchCommentsByApplicationIdQuery, FetchCommentsByApplicationIdQueryVariables>(FetchCommentsByApplicationIdDocument, options);
      }
export function useFetchCommentsByApplicationIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchCommentsByApplicationIdQuery, FetchCommentsByApplicationIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchCommentsByApplicationIdQuery, FetchCommentsByApplicationIdQueryVariables>(FetchCommentsByApplicationIdDocument, options);
        }
export type FetchCommentsByApplicationIdQueryHookResult = ReturnType<typeof useFetchCommentsByApplicationIdQuery>;
export type FetchCommentsByApplicationIdLazyQueryHookResult = ReturnType<typeof useFetchCommentsByApplicationIdLazyQuery>;
export type FetchCommentsByApplicationIdQueryResult = Apollo.QueryResult<FetchCommentsByApplicationIdQuery, FetchCommentsByApplicationIdQueryVariables>;
export const FetchCommentsByApplicationNameDocument = gql`
    query FetchCommentsByApplicationName($fetchCommentsByApplicationName: FetchCommentsByApplicationNameInput!) {
  fetch_comments_by_application_name(
    fetchCommentsByApplicationName: $fetchCommentsByApplicationName
  ) {
    comments_count
    comments {
      ...CommentFragment
    }
  }
}
    ${CommentFragmentFragmentDoc}`;

/**
 * __useFetchCommentsByApplicationNameQuery__
 *
 * To run a query within a React component, call `useFetchCommentsByApplicationNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCommentsByApplicationNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCommentsByApplicationNameQuery({
 *   variables: {
 *      fetchCommentsByApplicationName: // value for 'fetchCommentsByApplicationName'
 *   },
 * });
 */
export function useFetchCommentsByApplicationNameQuery(baseOptions: Apollo.QueryHookOptions<FetchCommentsByApplicationNameQuery, FetchCommentsByApplicationNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchCommentsByApplicationNameQuery, FetchCommentsByApplicationNameQueryVariables>(FetchCommentsByApplicationNameDocument, options);
      }
export function useFetchCommentsByApplicationNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchCommentsByApplicationNameQuery, FetchCommentsByApplicationNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchCommentsByApplicationNameQuery, FetchCommentsByApplicationNameQueryVariables>(FetchCommentsByApplicationNameDocument, options);
        }
export type FetchCommentsByApplicationNameQueryHookResult = ReturnType<typeof useFetchCommentsByApplicationNameQuery>;
export type FetchCommentsByApplicationNameLazyQueryHookResult = ReturnType<typeof useFetchCommentsByApplicationNameLazyQuery>;
export type FetchCommentsByApplicationNameQueryResult = Apollo.QueryResult<FetchCommentsByApplicationNameQuery, FetchCommentsByApplicationNameQueryVariables>;
export const FetchApplicationsByOwnerDocument = gql`
    query FetchApplicationsByOwner {
  fetch_all_applications {
    ...ApplicationFields
  }
}
    ${ApplicationFieldsFragmentDoc}`;

/**
 * __useFetchApplicationsByOwnerQuery__
 *
 * To run a query within a React component, call `useFetchApplicationsByOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchApplicationsByOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchApplicationsByOwnerQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchApplicationsByOwnerQuery(baseOptions?: Apollo.QueryHookOptions<FetchApplicationsByOwnerQuery, FetchApplicationsByOwnerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchApplicationsByOwnerQuery, FetchApplicationsByOwnerQueryVariables>(FetchApplicationsByOwnerDocument, options);
      }
export function useFetchApplicationsByOwnerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchApplicationsByOwnerQuery, FetchApplicationsByOwnerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchApplicationsByOwnerQuery, FetchApplicationsByOwnerQueryVariables>(FetchApplicationsByOwnerDocument, options);
        }
export type FetchApplicationsByOwnerQueryHookResult = ReturnType<typeof useFetchApplicationsByOwnerQuery>;
export type FetchApplicationsByOwnerLazyQueryHookResult = ReturnType<typeof useFetchApplicationsByOwnerLazyQuery>;
export type FetchApplicationsByOwnerQueryResult = Apollo.QueryResult<FetchApplicationsByOwnerQuery, FetchApplicationsByOwnerQueryVariables>;
export const FindOneApplicationByIdDocument = gql`
    query FindOneApplicationById($findOneApplicationByIdId: String!) {
  find_one_application_by_id(id: $findOneApplicationByIdId) {
    ...ApplicationFields
  }
}
    ${ApplicationFieldsFragmentDoc}`;

/**
 * __useFindOneApplicationByIdQuery__
 *
 * To run a query within a React component, call `useFindOneApplicationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneApplicationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneApplicationByIdQuery({
 *   variables: {
 *      findOneApplicationByIdId: // value for 'findOneApplicationByIdId'
 *   },
 * });
 */
export function useFindOneApplicationByIdQuery(baseOptions: Apollo.QueryHookOptions<FindOneApplicationByIdQuery, FindOneApplicationByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneApplicationByIdQuery, FindOneApplicationByIdQueryVariables>(FindOneApplicationByIdDocument, options);
      }
export function useFindOneApplicationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneApplicationByIdQuery, FindOneApplicationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneApplicationByIdQuery, FindOneApplicationByIdQueryVariables>(FindOneApplicationByIdDocument, options);
        }
export type FindOneApplicationByIdQueryHookResult = ReturnType<typeof useFindOneApplicationByIdQuery>;
export type FindOneApplicationByIdLazyQueryHookResult = ReturnType<typeof useFindOneApplicationByIdLazyQuery>;
export type FindOneApplicationByIdQueryResult = Apollo.QueryResult<FindOneApplicationByIdQuery, FindOneApplicationByIdQueryVariables>;
export const CreateApplicationDocument = gql`
    mutation CreateApplication($createApplicationInput: CreateApplicationInput!) {
  create_application(createApplicationInput: $createApplicationInput) {
    application_name
  }
}
    `;
export type CreateApplicationMutationFn = Apollo.MutationFunction<CreateApplicationMutation, CreateApplicationMutationVariables>;

/**
 * __useCreateApplicationMutation__
 *
 * To run a mutation, you first call `useCreateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApplicationMutation, { data, loading, error }] = useCreateApplicationMutation({
 *   variables: {
 *      createApplicationInput: // value for 'createApplicationInput'
 *   },
 * });
 */
export function useCreateApplicationMutation(baseOptions?: Apollo.MutationHookOptions<CreateApplicationMutation, CreateApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateApplicationMutation, CreateApplicationMutationVariables>(CreateApplicationDocument, options);
      }
export type CreateApplicationMutationHookResult = ReturnType<typeof useCreateApplicationMutation>;
export type CreateApplicationMutationResult = Apollo.MutationResult<CreateApplicationMutation>;
export type CreateApplicationMutationOptions = Apollo.BaseMutationOptions<CreateApplicationMutation, CreateApplicationMutationVariables>;
export const RemoveApplicationModeratorDocument = gql`
    mutation RemoveApplicationModerator($removeModeratorInput: RemoveModeratorInput!) {
  remove_application_moderator(removeModeratorInput: $removeModeratorInput) {
    ...ApplicationFields
  }
}
    ${ApplicationFieldsFragmentDoc}`;
export type RemoveApplicationModeratorMutationFn = Apollo.MutationFunction<RemoveApplicationModeratorMutation, RemoveApplicationModeratorMutationVariables>;

/**
 * __useRemoveApplicationModeratorMutation__
 *
 * To run a mutation, you first call `useRemoveApplicationModeratorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveApplicationModeratorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeApplicationModeratorMutation, { data, loading, error }] = useRemoveApplicationModeratorMutation({
 *   variables: {
 *      removeModeratorInput: // value for 'removeModeratorInput'
 *   },
 * });
 */
export function useRemoveApplicationModeratorMutation(baseOptions?: Apollo.MutationHookOptions<RemoveApplicationModeratorMutation, RemoveApplicationModeratorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveApplicationModeratorMutation, RemoveApplicationModeratorMutationVariables>(RemoveApplicationModeratorDocument, options);
      }
export type RemoveApplicationModeratorMutationHookResult = ReturnType<typeof useRemoveApplicationModeratorMutation>;
export type RemoveApplicationModeratorMutationResult = Apollo.MutationResult<RemoveApplicationModeratorMutation>;
export type RemoveApplicationModeratorMutationOptions = Apollo.BaseMutationOptions<RemoveApplicationModeratorMutation, RemoveApplicationModeratorMutationVariables>;
export const AddApplicationModeratorDocument = gql`
    mutation AddApplicationModerator($addModeratorInput: AddModeratorInput!) {
  add_application_moderator(addModeratorInput: $addModeratorInput) {
    ...ApplicationFields
  }
}
    ${ApplicationFieldsFragmentDoc}`;
export type AddApplicationModeratorMutationFn = Apollo.MutationFunction<AddApplicationModeratorMutation, AddApplicationModeratorMutationVariables>;

/**
 * __useAddApplicationModeratorMutation__
 *
 * To run a mutation, you first call `useAddApplicationModeratorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddApplicationModeratorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addApplicationModeratorMutation, { data, loading, error }] = useAddApplicationModeratorMutation({
 *   variables: {
 *      addModeratorInput: // value for 'addModeratorInput'
 *   },
 * });
 */
export function useAddApplicationModeratorMutation(baseOptions?: Apollo.MutationHookOptions<AddApplicationModeratorMutation, AddApplicationModeratorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddApplicationModeratorMutation, AddApplicationModeratorMutationVariables>(AddApplicationModeratorDocument, options);
      }
export type AddApplicationModeratorMutationHookResult = ReturnType<typeof useAddApplicationModeratorMutation>;
export type AddApplicationModeratorMutationResult = Apollo.MutationResult<AddApplicationModeratorMutation>;
export type AddApplicationModeratorMutationOptions = Apollo.BaseMutationOptions<AddApplicationModeratorMutation, AddApplicationModeratorMutationVariables>;
export const DeleteManyCommentsDocument = gql`
    mutation DeleteManyComments($deleteManyCommentsInput: DeleteManyCommentsInput!) {
  delete_many_comments(deleteManyCommentsInput: $deleteManyCommentsInput) {
    success
    message
  }
}
    `;
export type DeleteManyCommentsMutationFn = Apollo.MutationFunction<DeleteManyCommentsMutation, DeleteManyCommentsMutationVariables>;

/**
 * __useDeleteManyCommentsMutation__
 *
 * To run a mutation, you first call `useDeleteManyCommentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCommentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCommentsMutation, { data, loading, error }] = useDeleteManyCommentsMutation({
 *   variables: {
 *      deleteManyCommentsInput: // value for 'deleteManyCommentsInput'
 *   },
 * });
 */
export function useDeleteManyCommentsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyCommentsMutation, DeleteManyCommentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyCommentsMutation, DeleteManyCommentsMutationVariables>(DeleteManyCommentsDocument, options);
      }
export type DeleteManyCommentsMutationHookResult = ReturnType<typeof useDeleteManyCommentsMutation>;
export type DeleteManyCommentsMutationResult = Apollo.MutationResult<DeleteManyCommentsMutation>;
export type DeleteManyCommentsMutationOptions = Apollo.BaseMutationOptions<DeleteManyCommentsMutation, DeleteManyCommentsMutationVariables>;
export const UpdateApplicationCommentRulesDocument = gql`
    mutation UpdateApplicationCommentRules($updateApplicationCommentRulesInput: UpdateApplicationCommentRulesInput!) {
  update_application_comment_rules(
    updateApplicationCommentRulesInput: $updateApplicationCommentRulesInput
  ) {
    id
    application_name
    links_in_comments
    email_mods_when_comments_flagged
    allow_images_and_videos_on_comments
    pre_comment_moderation
    display_comments_when_flagged
  }
}
    `;
export type UpdateApplicationCommentRulesMutationFn = Apollo.MutationFunction<UpdateApplicationCommentRulesMutation, UpdateApplicationCommentRulesMutationVariables>;

/**
 * __useUpdateApplicationCommentRulesMutation__
 *
 * To run a mutation, you first call `useUpdateApplicationCommentRulesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApplicationCommentRulesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApplicationCommentRulesMutation, { data, loading, error }] = useUpdateApplicationCommentRulesMutation({
 *   variables: {
 *      updateApplicationCommentRulesInput: // value for 'updateApplicationCommentRulesInput'
 *   },
 * });
 */
export function useUpdateApplicationCommentRulesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateApplicationCommentRulesMutation, UpdateApplicationCommentRulesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateApplicationCommentRulesMutation, UpdateApplicationCommentRulesMutationVariables>(UpdateApplicationCommentRulesDocument, options);
      }
export type UpdateApplicationCommentRulesMutationHookResult = ReturnType<typeof useUpdateApplicationCommentRulesMutation>;
export type UpdateApplicationCommentRulesMutationResult = Apollo.MutationResult<UpdateApplicationCommentRulesMutation>;
export type UpdateApplicationCommentRulesMutationOptions = Apollo.BaseMutationOptions<UpdateApplicationCommentRulesMutation, UpdateApplicationCommentRulesMutationVariables>;
export const UpdateApplicationDocument = gql`
    mutation UpdateApplication($updateApplicationInput: UpdateApplicationInput!) {
  update_application(updateApplicationInput: $updateApplicationInput) {
    ...ApplicationFields
  }
}
    ${ApplicationFieldsFragmentDoc}`;
export type UpdateApplicationMutationFn = Apollo.MutationFunction<UpdateApplicationMutation, UpdateApplicationMutationVariables>;

/**
 * __useUpdateApplicationMutation__
 *
 * To run a mutation, you first call `useUpdateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApplicationMutation, { data, loading, error }] = useUpdateApplicationMutation({
 *   variables: {
 *      updateApplicationInput: // value for 'updateApplicationInput'
 *   },
 * });
 */
export function useUpdateApplicationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateApplicationMutation, UpdateApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateApplicationMutation, UpdateApplicationMutationVariables>(UpdateApplicationDocument, options);
      }
export type UpdateApplicationMutationHookResult = ReturnType<typeof useUpdateApplicationMutation>;
export type UpdateApplicationMutationResult = Apollo.MutationResult<UpdateApplicationMutation>;
export type UpdateApplicationMutationOptions = Apollo.BaseMutationOptions<UpdateApplicationMutation, UpdateApplicationMutationVariables>;
export const ApproveCommentDocument = gql`
    mutation ApproveComment($approveCommentsInput: ApproveCommentsInput!) {
  approve_comments(approveCommentsInput: $approveCommentsInput) {
    success
    message
  }
}
    `;
export type ApproveCommentMutationFn = Apollo.MutationFunction<ApproveCommentMutation, ApproveCommentMutationVariables>;

/**
 * __useApproveCommentMutation__
 *
 * To run a mutation, you first call `useApproveCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveCommentMutation, { data, loading, error }] = useApproveCommentMutation({
 *   variables: {
 *      approveCommentsInput: // value for 'approveCommentsInput'
 *   },
 * });
 */
export function useApproveCommentMutation(baseOptions?: Apollo.MutationHookOptions<ApproveCommentMutation, ApproveCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApproveCommentMutation, ApproveCommentMutationVariables>(ApproveCommentDocument, options);
      }
export type ApproveCommentMutationHookResult = ReturnType<typeof useApproveCommentMutation>;
export type ApproveCommentMutationResult = Apollo.MutationResult<ApproveCommentMutation>;
export type ApproveCommentMutationOptions = Apollo.BaseMutationOptions<ApproveCommentMutation, ApproveCommentMutationVariables>;
export const ConfirmUserDocument = gql`
    mutation ConfirmUser($token: String!) {
  confirm_user(token: $token) {
    success
    message
  }
}
    `;
export type ConfirmUserMutationFn = Apollo.MutationFunction<ConfirmUserMutation, ConfirmUserMutationVariables>;

/**
 * __useConfirmUserMutation__
 *
 * To run a mutation, you first call `useConfirmUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmUserMutation, { data, loading, error }] = useConfirmUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmUserMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmUserMutation, ConfirmUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmUserMutation, ConfirmUserMutationVariables>(ConfirmUserDocument, options);
      }
export type ConfirmUserMutationHookResult = ReturnType<typeof useConfirmUserMutation>;
export type ConfirmUserMutationResult = Apollo.MutationResult<ConfirmUserMutation>;
export type ConfirmUserMutationOptions = Apollo.BaseMutationOptions<ConfirmUserMutation, ConfirmUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($email: String!, $password: String!, $redirect_url: String, $username: String!) {
  register_user(
    email: $email
    password: $password
    redirect_url: $redirect_url
    username: $username
  ) {
    success
    message
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      redirect_url: // value for 'redirect_url'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const FetchNotificationsByUserIdDocument = gql`
    query FetchNotificationsByUserId($fetchNotificationsByUserIdInput: FetchNotificationsByUserIdInput!) {
  fetch_notifications_by_user_id(
    fetchNotificationsByUserIdInput: $fetchNotificationsByUserIdInput
  ) {
    id
    created_at
    updated_at
    message
    url
  }
}
    `;

/**
 * __useFetchNotificationsByUserIdQuery__
 *
 * To run a query within a React component, call `useFetchNotificationsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchNotificationsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchNotificationsByUserIdQuery({
 *   variables: {
 *      fetchNotificationsByUserIdInput: // value for 'fetchNotificationsByUserIdInput'
 *   },
 * });
 */
export function useFetchNotificationsByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FetchNotificationsByUserIdQuery, FetchNotificationsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchNotificationsByUserIdQuery, FetchNotificationsByUserIdQueryVariables>(FetchNotificationsByUserIdDocument, options);
      }
export function useFetchNotificationsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchNotificationsByUserIdQuery, FetchNotificationsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchNotificationsByUserIdQuery, FetchNotificationsByUserIdQueryVariables>(FetchNotificationsByUserIdDocument, options);
        }
export type FetchNotificationsByUserIdQueryHookResult = ReturnType<typeof useFetchNotificationsByUserIdQuery>;
export type FetchNotificationsByUserIdLazyQueryHookResult = ReturnType<typeof useFetchNotificationsByUserIdLazyQuery>;
export type FetchNotificationsByUserIdQueryResult = Apollo.QueryResult<FetchNotificationsByUserIdQuery, FetchNotificationsByUserIdQueryVariables>;
export type ApplicationModelKeySpecifier = ('adult_content' | 'allow_images_and_videos_on_comments' | 'application_name' | 'application_owner' | 'application_owner_id' | 'auth_secret' | 'authenticated_users' | 'authenticated_users_ids' | 'category' | 'comment_policy_summary' | 'comment_policy_url' | 'comments' | 'cost' | 'created_at' | 'default_avatar_url' | 'description' | 'display_comments_when_flagged' | 'email_mods_when_comments_flagged' | 'id' | 'language' | 'links_in_comments' | 'moderators' | 'moderators_ids' | 'plan' | 'pre_comment_moderation' | 'renewal' | 'short_name' | 'theme' | 'threads' | 'updated_at' | 'website_url' | ApplicationModelKeySpecifier)[];
export type ApplicationModelFieldPolicy = {
	adult_content?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_images_and_videos_on_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	application_name?: FieldPolicy<any> | FieldReadFunction<any>,
	application_owner?: FieldPolicy<any> | FieldReadFunction<any>,
	application_owner_id?: FieldPolicy<any> | FieldReadFunction<any>,
	auth_secret?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticated_users?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticated_users_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	comment_policy_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	comment_policy_url?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	default_avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	display_comments_when_flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	email_mods_when_comments_flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	links_in_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	moderators?: FieldPolicy<any> | FieldReadFunction<any>,
	moderators_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	plan?: FieldPolicy<any> | FieldReadFunction<any>,
	pre_comment_moderation?: FieldPolicy<any> | FieldReadFunction<any>,
	renewal?: FieldPolicy<any> | FieldReadFunction<any>,
	short_name?: FieldPolicy<any> | FieldReadFunction<any>,
	theme?: FieldPolicy<any> | FieldReadFunction<any>,
	threads?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	website_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentModelKeySpecifier = ('_count' | 'application_id' | 'author' | 'created_at' | 'deleted' | 'down_vote' | 'flagged' | 'id' | 'json_body' | 'parent_id' | 'pending' | 'plain_text_body' | 'private_information' | 'replied_to_id' | 'replied_to_user' | 'replies' | 'thread_id' | 'threatening_content' | 'up_vote' | 'updated_at' | 'user_id' | CommentModelKeySpecifier)[];
export type CommentModelFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	application_id?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	down_vote?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	json_body?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>,
	pending?: FieldPolicy<any> | FieldReadFunction<any>,
	plain_text_body?: FieldPolicy<any> | FieldReadFunction<any>,
	private_information?: FieldPolicy<any> | FieldReadFunction<any>,
	replied_to_id?: FieldPolicy<any> | FieldReadFunction<any>,
	replied_to_user?: FieldPolicy<any> | FieldReadFunction<any>,
	replies?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>,
	threatening_content?: FieldPolicy<any> | FieldReadFunction<any>,
	up_vote?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountModelKeySpecifier = ('down_vote' | 'replies' | 'up_vote' | CountModelKeySpecifier)[];
export type CountModelFieldPolicy = {
	down_vote?: FieldPolicy<any> | FieldReadFunction<any>,
	replies?: FieldPolicy<any> | FieldReadFunction<any>,
	up_vote?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FetchAllCommentsKeySpecifier = ('comments' | 'comments_count' | FetchAllCommentsKeySpecifier)[];
export type FetchAllCommentsFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	comments_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FetchCommentByApplicationNameKeySpecifier = ('comments' | 'comments_count' | FetchCommentByApplicationNameKeySpecifier)[];
export type FetchCommentByApplicationNameFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	comments_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FetchCommentByThreadIdResponseKeySpecifier = ('comments' | 'comments_count' | FetchCommentByThreadIdResponseKeySpecifier)[];
export type FetchCommentByThreadIdResponseFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	comments_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FetchCommentsByApplicationIdKeySpecifier = ('comments' | 'comments_count' | FetchCommentsByApplicationIdKeySpecifier)[];
export type FetchCommentsByApplicationIdFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	comments_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginResponseKeySpecifier = ('message' | 'refresh_token' | 'success' | 'token' | 'user' | LoginResponseKeySpecifier)[];
export type LoginResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	refresh_token?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('add_application_moderator' | 'approve_comments' | 'block_user' | 'confirm_user' | 'create_application' | 'create_comment' | 'create_order' | 'create_reply_comment' | 'create_report' | 'delete_comment' | 'delete_many_comments' | 'delete_many_notifications' | 'delete_notification' | 'delete_user' | 'down_vote_comment' | 'forgot_password' | 'login_user' | 'logout_user' | 'regenerate_new_auth_secret' | 'register_user' | 'remove_application' | 'remove_application_moderator' | 'reset_password' | 'unblock_user' | 'up_vote_comment' | 'update_application' | 'update_application_comment_rules' | 'update_comment' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	add_application_moderator?: FieldPolicy<any> | FieldReadFunction<any>,
	approve_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	block_user?: FieldPolicy<any> | FieldReadFunction<any>,
	confirm_user?: FieldPolicy<any> | FieldReadFunction<any>,
	create_application?: FieldPolicy<any> | FieldReadFunction<any>,
	create_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	create_order?: FieldPolicy<any> | FieldReadFunction<any>,
	create_reply_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	create_report?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_many_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_many_notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_notification?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user?: FieldPolicy<any> | FieldReadFunction<any>,
	down_vote_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	forgot_password?: FieldPolicy<any> | FieldReadFunction<any>,
	login_user?: FieldPolicy<any> | FieldReadFunction<any>,
	logout_user?: FieldPolicy<any> | FieldReadFunction<any>,
	regenerate_new_auth_secret?: FieldPolicy<any> | FieldReadFunction<any>,
	register_user?: FieldPolicy<any> | FieldReadFunction<any>,
	remove_application?: FieldPolicy<any> | FieldReadFunction<any>,
	remove_application_moderator?: FieldPolicy<any> | FieldReadFunction<any>,
	reset_password?: FieldPolicy<any> | FieldReadFunction<any>,
	unblock_user?: FieldPolicy<any> | FieldReadFunction<any>,
	up_vote_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	update_application?: FieldPolicy<any> | FieldReadFunction<any>,
	update_application_comment_rules?: FieldPolicy<any> | FieldReadFunction<any>,
	update_comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationKeySpecifier = ('created_at' | 'id' | 'message' | 'updated_at' | 'url' | NotificationKeySpecifier)[];
export type NotificationFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('current_user' | 'fetch_all_applications' | 'fetch_all_threads' | 'fetch_applications_by_owner_id' | 'fetch_comments' | 'fetch_comments_by_application_id' | 'fetch_comments_by_application_name' | 'fetch_comments_by_thread_id' | 'fetch_notifications_by_user_id' | 'fetch_users' | 'find_one_application_by_id' | 'find_one_application_by_name' | 'find_one_thread_or_create_one' | 'resend_email_code' | 'search_user_by_email' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	current_user?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_all_applications?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_all_threads?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_applications_by_owner_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comments_by_application_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comments_by_application_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comments_by_thread_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_notifications_by_user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_users?: FieldPolicy<any> | FieldReadFunction<any>,
	find_one_application_by_id?: FieldPolicy<any> | FieldReadFunction<any>,
	find_one_application_by_name?: FieldPolicy<any> | FieldReadFunction<any>,
	find_one_thread_or_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	resend_email_code?: FieldPolicy<any> | FieldReadFunction<any>,
	search_user_by_email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingModelKeySpecifier = ('author_id' | 'id' | RatingModelKeySpecifier)[];
export type RatingModelFieldPolicy = {
	author_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StandardResponseKeySpecifier = ('message' | 'success' | StandardResponseKeySpecifier)[];
export type StandardResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StandardResponseModelKeySpecifier = ('message' | 'success' | StandardResponseModelKeySpecifier)[];
export type StandardResponseModelFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadModelKeySpecifier = ('application_id' | 'id' | 'pinned_comment' | 'pinned_comment_id' | 'thread_comments' | 'title' | 'website_url' | ThreadModelKeySpecifier)[];
export type ThreadModelFieldPolicy = {
	application_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pinned_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	pinned_comment_id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	website_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserModelKeySpecifier = ('applications_joined_ids' | 'blocked_users' | 'confirmed' | 'created_at' | 'email' | 'id' | 'last_active' | 'updated_at' | 'user_role' | 'username' | UserModelKeySpecifier)[];
export type UserModelFieldPolicy = {
	applications_joined_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	blocked_users?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_active?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_role?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ApplicationModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationModelKeySpecifier | (() => undefined | ApplicationModelKeySpecifier),
		fields?: ApplicationModelFieldPolicy,
	},
	CommentModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentModelKeySpecifier | (() => undefined | CommentModelKeySpecifier),
		fields?: CommentModelFieldPolicy,
	},
	CountModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountModelKeySpecifier | (() => undefined | CountModelKeySpecifier),
		fields?: CountModelFieldPolicy,
	},
	FetchAllComments?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FetchAllCommentsKeySpecifier | (() => undefined | FetchAllCommentsKeySpecifier),
		fields?: FetchAllCommentsFieldPolicy,
	},
	FetchCommentByApplicationName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FetchCommentByApplicationNameKeySpecifier | (() => undefined | FetchCommentByApplicationNameKeySpecifier),
		fields?: FetchCommentByApplicationNameFieldPolicy,
	},
	FetchCommentByThreadIdResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FetchCommentByThreadIdResponseKeySpecifier | (() => undefined | FetchCommentByThreadIdResponseKeySpecifier),
		fields?: FetchCommentByThreadIdResponseFieldPolicy,
	},
	FetchCommentsByApplicationId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FetchCommentsByApplicationIdKeySpecifier | (() => undefined | FetchCommentsByApplicationIdKeySpecifier),
		fields?: FetchCommentsByApplicationIdFieldPolicy,
	},
	LoginResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginResponseKeySpecifier | (() => undefined | LoginResponseKeySpecifier),
		fields?: LoginResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Notification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationKeySpecifier | (() => undefined | NotificationKeySpecifier),
		fields?: NotificationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RatingModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingModelKeySpecifier | (() => undefined | RatingModelKeySpecifier),
		fields?: RatingModelFieldPolicy,
	},
	StandardResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StandardResponseKeySpecifier | (() => undefined | StandardResponseKeySpecifier),
		fields?: StandardResponseFieldPolicy,
	},
	StandardResponseModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StandardResponseModelKeySpecifier | (() => undefined | StandardResponseModelKeySpecifier),
		fields?: StandardResponseModelFieldPolicy,
	},
	ThreadModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadModelKeySpecifier | (() => undefined | ThreadModelKeySpecifier),
		fields?: ThreadModelFieldPolicy,
	},
	UserModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserModelKeySpecifier | (() => undefined | UserModelKeySpecifier),
		fields?: UserModelFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;