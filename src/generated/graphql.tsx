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

export type AddPinnedCommentInput = {
  comment_id: Scalars['String'];
  thread_id: Scalars['String'];
};

export type AddUserToActiveUsersInput = {
  thread_id: Scalars['String'];
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
  commenters_users_ids: Array<Scalars['String']>;
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


export type ApplicationModelAuthenticated_UsersArgs = {
  authenticatedUserInput: AuthenticatedUserInput;
};

export type ApproveCommentsInput = {
  comment_ids: Array<Scalars['String']>;
};

export type AuthenticatedUserInput = {
  choice: Choice;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
};

export type AvatarEntity = {
  __typename?: 'AvatarEntity';
  ETag: Scalars['String'];
  created_at: Scalars['DateTime'];
  default_avatar: Scalars['Boolean'];
  encoding: Scalars['String'];
  filename: Scalars['String'];
  id: Scalars['String'];
  key: Scalars['String'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
};

export enum Category {
  Tech = 'TECH'
}

export enum Choice {
  All = 'ALL',
  Blocked = 'BLOCKED',
  Removed = 'REMOVED'
}

export type ChangeCommentSettingsInput = {
  comment_id: Scalars['String'];
  reply_notification: Scalars['Boolean'];
};

export type ChangePasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ClosePollInput = {
  poll_id: Scalars['String'];
};

export type CommentAndVoteCountEntity = {
  __typename?: 'CommentAndVoteCountEntity';
  comment_count: Scalars['Int'];
  vote_count: Scalars['Int'];
};

export type CommentModel = {
  __typename?: 'CommentModel';
  _count: CountModel;
  application_id: Scalars['String'];
  approved: Scalars['Boolean'];
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
  reply_notification: Scalars['Boolean'];
  reports: Array<ReportModel>;
  thread_id: Scalars['String'];
  threatening_content: Scalars['Boolean'];
  up_vote: Array<RatingModel>;
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type CommentsByUserIdInput = {
  user_id?: Maybe<Scalars['String']>;
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
  application_short_name: Scalars['String'];
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

export type CreatePollInput = {
  options: Array<OptionInput>;
  thread_id: Scalars['String'];
  title: Scalars['String'];
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

export type DeletePollInput = {
  poll_id: Scalars['String'];
  thread_id: Scalars['String'];
};

export type FetchAllComments = {
  __typename?: 'FetchAllComments';
  comments: Array<CommentModel>;
  comments_count: Scalars['Int'];
};

export type FetchApplicationByShortNameInput = {
  application_short_name: Scalars['String'];
};

export type FetchCommentAndVoteCountInput = {
  user_id: Scalars['String'];
};

export type FetchCommentByApplicationName = {
  __typename?: 'FetchCommentByApplicationName';
  comments: Array<CommentModel>;
  comments_count: Scalars['Float'];
};

export type FetchCommentByThreadIdInput = {
  application_short_name: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
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
  application_short_name: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  sort?: Maybe<Sort>;
};

export type FetchCommentsByApplicationShortNameInput = {
  application_short_name: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  sort?: Maybe<Sort>;
  where: Where;
};

export type FetchNotificationByApplicationIdInput = {
  application_id: Scalars['String'];
};

export type FetchNotificationByApplicationShortNameInput = {
  short_name: Scalars['String'];
};

export type FetchNotificationsByUserIdInput = {
  user_id: Scalars['String'];
};

export type FetchThreadCommentsBySort = {
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  sort?: Maybe<Sort>;
};

export type FetchThreadsByUserIdInput = {
  user_id: Scalars['String'];
};

export type FindOrCreateOneThreadInput = {
  /** Application ID */
  application_id: Scalars['String'];
  /** Thread Title */
  title?: Maybe<Scalars['String']>;
  /** Thread website url */
  website_url: Scalars['String'];
};

export type FindProfileInput = {
  username: Scalars['String'];
};

export type FindThreadByIdInput = {
  thread_id: Scalars['String'];
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
  redirect_url?: Maybe<Scalars['String']>;
};

export type IsUserSubscribedToThreadInput = {
  thread_id: Scalars['String'];
};

export enum Language {
  English = 'ENGLISH'
}

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  message: Scalars['String'];
  refresh_token: Scalars['String'];
  success: Scalars['Boolean'];
  token: Scalars['String'];
  two_factor_authentication: Scalars['Boolean'];
  user: UserModel;
};

export type LoginResponseUnion = LoginResponse | TwoFactorLoginResponse;

export type Mutation = {
  __typename?: 'Mutation';
  add_application_moderator: ApplicationModel;
  add_pinned_comment: ThreadModel;
  add_user_to_threads_active_users: StandardResponseModel;
  approve_comments: StandardResponseModel;
  block_user: StandardResponseModel;
  change_comment_settings: CommentModel;
  change_password: StandardResponseModel;
  close_poll: PollEntity;
  confirm_user: StandardResponseModel;
  create_application: ApplicationModel;
  create_comment: CommentModel;
  create_order: StandardResponseModel;
  create_poll: PollEntity;
  create_reply_comment: CommentModel;
  create_report: StandardResponseModel;
  delete_comment: StandardResponseModel;
  delete_many_comments: StandardResponseModel;
  delete_many_notifications: StandardResponse;
  delete_notification: StandardResponse;
  delete_poll: StandardResponseModel;
  delete_user: StandardResponseModel;
  down_vote_comment: CommentModel;
  forgot_password: StandardResponseModel;
  login_user: LoginResponseUnion;
  logout_user: StandardResponseModel;
  regenerate_new_auth_secret: ApplicationModel;
  register_user: StandardResponseModel;
  remove_application: StandardResponseModel;
  remove_application_moderator: ApplicationModel;
  remove_user_from_threads_active_users: StandardResponseModel;
  toggle_subscription_to_thread: StandardResponseModel;
  two_factor_login: TwoFactorLoginSuccessResponse;
  unblock_user: StandardResponseModel;
  up_vote_comment: CommentModel;
  update_application: ApplicationModel;
  update_application_comment_rules: ApplicationModel;
  update_comment: CommentModel;
  update_poll_vote: PollEntity;
  update_user: UserModel;
};


export type MutationAdd_Application_ModeratorArgs = {
  addModeratorInput: AddModeratorInput;
};


export type MutationAdd_Pinned_CommentArgs = {
  addPinnedCommentInput: AddPinnedCommentInput;
};


export type MutationAdd_User_To_Threads_Active_UsersArgs = {
  addUserToActiveUsersInput: AddUserToActiveUsersInput;
};


export type MutationApprove_CommentsArgs = {
  approveCommentsInput: ApproveCommentsInput;
};


export type MutationBlock_UserArgs = {
  user_id: Scalars['String'];
};


export type MutationChange_Comment_SettingsArgs = {
  changeCommentSettingsInput: ChangeCommentSettingsInput;
};


export type MutationChange_PasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationClose_PollArgs = {
  closePollInput: ClosePollInput;
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


export type MutationCreate_PollArgs = {
  createPollInput: CreatePollInput;
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


export type MutationDelete_PollArgs = {
  deletePollInput: DeletePollInput;
};


export type MutationDelete_UserArgs = {
  email: Scalars['String'];
};


export type MutationDown_Vote_CommentArgs = {
  comment_id: Scalars['String'];
};


export type MutationForgot_PasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLogin_UserArgs = {
  loginInput: LoginInput;
};


export type MutationRegenerate_New_Auth_SecretArgs = {
  application_id: Scalars['String'];
};


export type MutationRegister_UserArgs = {
  registrationInput: RegistrationInput;
};


export type MutationRemove_ApplicationArgs = {
  id: Scalars['String'];
};


export type MutationRemove_Application_ModeratorArgs = {
  removeModeratorInput: RemoveModeratorInput;
};


export type MutationRemove_User_From_Threads_Active_UsersArgs = {
  removeUserFromThreadsActiveUsersInput: RemoveUserFromThreadsActiveUsersInput;
};


export type MutationToggle_Subscription_To_ThreadArgs = {
  toggleSubscriptionToThreadInput: ToggleSubscriptionToThreadInput;
};


export type MutationTwo_Factor_LoginArgs = {
  twoFactorInput: TwoFactorInput;
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


export type MutationUpdate_Poll_VoteArgs = {
  updatePollVoteInput: UpdatePollVoteInput;
};


export type MutationUpdate_UserArgs = {
  UpdateUserInput: UpdateUserInput;
};

export type Notification = {
  __typename?: 'Notification';
  application_id?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
};

export type OptionEntity = {
  __typename?: 'OptionEntity';
  id: Scalars['String'];
  option: Scalars['String'];
  votes: Array<VoteEntity>;
};

export type OptionInput = {
  option: Scalars['String'];
};

export enum Pre_Comment_Moderation {
  All = 'ALL',
  NewComments = 'NEW_COMMENTS',
  None = 'NONE'
}

export type PollEntity = {
  __typename?: 'PollEntity';
  closed: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  options: Array<OptionEntity>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  voted: Array<Scalars['String']>;
};

export type ProfileEntity = {
  __typename?: 'ProfileEntity';
  id: Scalars['String'];
  profile_comments: Array<CommentModel>;
  user: UserModel;
};

export type Query = {
  __typename?: 'Query';
  current_user: UserModel;
  fetch_all_applications: Array<ApplicationModel>;
  fetch_all_threads: Array<ThreadModel>;
  fetch_application_by_short_name: ApplicationModel;
  fetch_applications_by_owner_id: Array<ApplicationModel>;
  fetch_comment_and_vote_count: CommentAndVoteCountEntity;
  fetch_comments: FetchAllComments;
  fetch_comments_by_application_id: FetchCommentsByApplicationId;
  fetch_comments_by_application_short_name: FetchCommentByApplicationName;
  fetch_comments_by_thread_id: FetchCommentByThreadIdResponse;
  fetch_notifications: Array<Notification>;
  fetch_notifications_by_application_id: Array<Notification>;
  fetch_notifications_by_short_name: Array<Notification>;
  fetch_notifications_by_user_id: Array<Notification>;
  fetch_threads_by_user_id: Array<ThreadModel>;
  fetch_users: Array<UserModel>;
  find_one_application_by_id: ApplicationModel;
  find_one_application_by_name: ApplicationModel;
  find_one_thread_or_create_one: ThreadModel;
  find_profile: ProfileEntity;
  find_thread_by_id: ThreadModel;
  is_user_subscribed_to_thread: StandardResponseModel;
  resend_email_code: StandardResponseModel;
  search_user_by_email: UserModel;
};


export type QueryFetch_Application_By_Short_NameArgs = {
  fetchApplicationByShortNameInput: FetchApplicationByShortNameInput;
};


export type QueryFetch_Comment_And_Vote_CountArgs = {
  fetchCommentAndVoteCountInput: FetchCommentAndVoteCountInput;
};


export type QueryFetch_Comments_By_Application_IdArgs = {
  fetchCommentsByApplicationId: FetchCommentsByApplicationIdInput;
};


export type QueryFetch_Comments_By_Application_Short_NameArgs = {
  fetchCommentsByApplicationShortNameInput: FetchCommentsByApplicationShortNameInput;
};


export type QueryFetch_Comments_By_Thread_IdArgs = {
  fetchCommentByThreadIdInput: FetchCommentByThreadIdInput;
};


export type QueryFetch_Notifications_By_Application_IdArgs = {
  fetchNotificationsByApplicationIdInput: FetchNotificationByApplicationIdInput;
};


export type QueryFetch_Notifications_By_Short_NameArgs = {
  fetchNotificationByApplicationShortNameInput: FetchNotificationByApplicationShortNameInput;
};


export type QueryFetch_Notifications_By_User_IdArgs = {
  fetchNotificationsByUserIdInput: FetchNotificationsByUserIdInput;
};


export type QueryFetch_Threads_By_User_IdArgs = {
  fetchThreadsByUserIdInput: FetchThreadsByUserIdInput;
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


export type QueryFind_ProfileArgs = {
  findProfileInput: FindProfileInput;
};


export type QueryFind_Thread_By_IdArgs = {
  findThreadById: FindThreadByIdInput;
};


export type QueryIs_User_Subscribed_To_ThreadArgs = {
  isUserSubscribedToThreadInput: IsUserSubscribedToThreadInput;
};


export type QueryResend_Email_CodeArgs = {
  resendEmailCodeInput: ResendEmailCodeInput;
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

export type RegistrationInput = {
  application_id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  redirect_url?: Maybe<Scalars['String']>;
  two_factor_authentication?: Maybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type RemoveModeratorInput = {
  application_id: Scalars['String'];
  moderator_id: Scalars['String'];
};

export type RemoveUserFromThreadsActiveUsersInput = {
  thread_id: Scalars['String'];
};

export type ReportModel = {
  __typename?: 'ReportModel';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  reason: Report_Reason;
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type ResendEmailCodeInput = {
  email: Scalars['String'];
  redirect_url: Scalars['String'];
};

export enum Status {
  Away = 'AWAY',
  Invisble = 'INVISBLE',
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

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
  commenters_ids: Array<Scalars['String']>;
  /** UUID for Thread */
  id: Scalars['String'];
  parent_application: ApplicationModel;
  pinned_comment?: Maybe<CommentModel>;
  pinned_comment_id?: Maybe<Scalars['String']>;
  poll?: Maybe<PollEntity>;
  subscribed_users: Array<UserModel>;
  subscribed_users_ids: Array<Scalars['String']>;
  thread_comments: FetchCommentByThreadIdResponse;
  title: Scalars['String'];
  website_url: Scalars['String'];
};


export type ThreadModelThread_CommentsArgs = {
  commentsByUserIdInput?: Maybe<CommentsByUserIdInput>;
  fetchThreadCommentsBySort: FetchThreadCommentsBySort;
};

export type ToggleSubscriptionToThreadInput = {
  thread_id: Scalars['String'];
};

export type TwoFactorInput = {
  email: Scalars['String'];
  two_factor_id: Scalars['String'];
};

export type TwoFactorLoginResponse = {
  __typename?: 'TwoFactorLoginResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
  two_factor_authentication: Scalars['Boolean'];
};

export type TwoFactorLoginSuccessResponse = {
  __typename?: 'TwoFactorLoginSuccessResponse';
  message: Scalars['String'];
  refresh_token: Scalars['String'];
  success: Scalars['Boolean'];
  token: Scalars['String'];
  two_factor_authentication: Scalars['Boolean'];
  user: UserModel;
};

export enum User_Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  Owner = 'OWNER',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export type UpdateApplicationCommentRulesInput = {
  allow_images_and_videos_on_comments: Scalars['Boolean'];
  application_short_name: Scalars['String'];
  display_comments_when_flagged: Scalars['Boolean'];
  email_mods_when_comments_flagged: Scalars['Boolean'];
  links_in_comments: Scalars['Boolean'];
  pre_comment_moderation: Pre_Comment_Moderation;
};

export type UpdateApplicationInput = {
  adult_content: Scalars['Boolean'];
  application_short_name: Scalars['String'];
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

export type UpdatePollVoteInput = {
  options_id: Scalars['String'];
  poll_id: Scalars['String'];
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  two_factor_authentication?: Maybe<Scalars['Boolean']>;
  user_role?: Maybe<User_Role>;
  username?: Maybe<Scalars['String']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  applications_joined_ids: Array<Scalars['String']>;
  avatar: AvatarEntity;
  blocked_users: Array<UserModel>;
  confirmed: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  last_active: Scalars['DateTime'];
  status: Status;
  two_factor_authentication: Scalars['Boolean'];
  updated_at: Scalars['DateTime'];
  user_role: User_Role;
  username: Scalars['String'];
};

export type VoteEntity = {
  __typename?: 'VoteEntity';
  id: Scalars['String'];
  user_id: Scalars['String'];
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

export type ApplicationFieldsFragment = { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, short_name: string, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> };

export type FetchCommentsByApplicationByShortNameQueryVariables = Exact<{
  fetchCommentsByApplicationShortNameInput: FetchCommentsByApplicationShortNameInput;
}>;


export type FetchCommentsByApplicationByShortNameQuery = { __typename?: 'Query', fetch_comments_by_application_short_name: { __typename?: 'FetchCommentByApplicationName', comments_count: number, comments: Array<{ __typename?: 'CommentModel', id: string, plain_text_body: string, application_id: string, author: { __typename?: 'UserModel', id: string, username: string } }> } };

export type FetchApplicationByShortNameQueryVariables = Exact<{
  fetchApplicationByShortNameInput: FetchApplicationByShortNameInput;
}>;


export type FetchApplicationByShortNameQuery = { __typename?: 'Query', fetch_application_by_short_name: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, short_name: string, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type FetchNotificationByApplicationShortNameQueryVariables = Exact<{
  fetchNotificationByApplicationShortNameInput: FetchNotificationByApplicationShortNameInput;
}>;


export type FetchNotificationByApplicationShortNameQuery = { __typename?: 'Query', fetch_notifications_by_short_name: Array<{ __typename?: 'Notification', id: string, created_at: any, updated_at: any, message: string, url: string }> };

export type FetchApplicationByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FetchApplicationByNameQuery = { __typename?: 'Query', find_one_application_by_name: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, short_name: string, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type CommentFragmentFragment = { __typename?: 'CommentModel', id: string, plain_text_body: string, application_id: string, author: { __typename?: 'UserModel', id: string, username: string } };

export type FetchCommentsByApplicationIdQueryVariables = Exact<{
  fetchCommentsByApplicationIdInput: FetchCommentsByApplicationIdInput;
}>;


export type FetchCommentsByApplicationIdQuery = { __typename?: 'Query', fetch_comments_by_application_id: { __typename?: 'FetchCommentsByApplicationId', comments_count: number, comments: Array<{ __typename?: 'CommentModel', id: string, plain_text_body: string, application_id: string, author: { __typename?: 'UserModel', id: string, username: string } }> } };

export type FetchApplicationsByOwnerQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchApplicationsByOwnerQuery = { __typename?: 'Query', fetch_all_applications: Array<{ __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, short_name: string, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> }> };

export type FindOneApplicationByIdQueryVariables = Exact<{
  findOneApplicationByIdId: Scalars['String'];
}>;


export type FindOneApplicationByIdQuery = { __typename?: 'Query', find_one_application_by_id: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, short_name: string, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type CreateApplicationMutationVariables = Exact<{
  createApplicationInput: CreateApplicationInput;
}>;


export type CreateApplicationMutation = { __typename?: 'Mutation', create_application: { __typename?: 'ApplicationModel', application_name: string, short_name: string } };

export type RemoveApplicationModeratorMutationVariables = Exact<{
  removeModeratorInput: RemoveModeratorInput;
}>;


export type RemoveApplicationModeratorMutation = { __typename?: 'Mutation', remove_application_moderator: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, short_name: string, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type AddApplicationModeratorMutationVariables = Exact<{
  addModeratorInput: AddModeratorInput;
}>;


export type AddApplicationModeratorMutation = { __typename?: 'Mutation', add_application_moderator: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, short_name: string, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

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


export type UpdateApplicationMutation = { __typename?: 'Mutation', update_application: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: any | null | undefined, short_name: string, created_at: any, updated_at: any, links_in_comments: boolean, email_mods_when_comments_flagged: boolean, allow_images_and_videos_on_comments: boolean, pre_comment_moderation: Pre_Comment_Moderation, display_comments_when_flagged: boolean, website_url?: string | null | undefined, category: Category, language: Language, theme: Theme, adult_content: boolean, comment_policy_url?: string | null | undefined, comment_policy_summary?: string | null | undefined, description?: string | null | undefined, default_avatar_url?: string | null | undefined, application_owner: { __typename?: 'UserModel', id: string }, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type ApproveCommentMutationVariables = Exact<{
  approveCommentsInput: ApproveCommentsInput;
}>;


export type ApproveCommentMutation = { __typename?: 'Mutation', approve_comments: { __typename?: 'StandardResponseModel', success: boolean, message: string } };

export type FetchApplicationAuthenticatedUsersQueryVariables = Exact<{
  fetchApplicationByShortNameInput: FetchApplicationByShortNameInput;
  authenticatedUserInput: AuthenticatedUserInput;
}>;


export type FetchApplicationAuthenticatedUsersQuery = { __typename?: 'Query', fetch_application_by_short_name: { __typename?: 'ApplicationModel', authenticated_users: Array<{ __typename?: 'UserModel', confirmed: boolean, last_active: any, username: string, id: string, created_at: any }> } };

export type ConfirmUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmUserMutation = { __typename?: 'Mutation', confirm_user: { __typename?: 'StandardResponseModel', success: boolean, message: string } };

export type RegisterUserMutationVariables = Exact<{
  registrationInput: RegistrationInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register_user: { __typename?: 'StandardResponseModel', success: boolean, message: string } };

export type ChangePasswordMutationVariables = Exact<{
  changePasswordInput: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', change_password: { __typename?: 'StandardResponseModel', success: boolean, message: string } };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPasswordInput: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgot_password: { __typename?: 'StandardResponseModel', success: boolean, message: string } };

export type LoginResponseFragmentFragment = { __typename?: 'LoginResponse', success: boolean, message: string, token: string, refresh_token: string, two_factor_authentication: boolean, user: { __typename?: 'UserModel', username: string, id: string } };

export type TwoFactorLoginResponseFragmentFragment = { __typename?: 'TwoFactorLoginResponse', success: boolean, message: string, two_factor_authentication: boolean };

export type LoginUserMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login_user: { __typename?: 'LoginResponse', success: boolean, message: string, token: string, refresh_token: string, two_factor_authentication: boolean, user: { __typename?: 'UserModel', username: string, id: string } } | { __typename?: 'TwoFactorLoginResponse', success: boolean, message: string, two_factor_authentication: boolean } };

export type TwoFactorLoginMutationVariables = Exact<{
  twoFactorInput: TwoFactorInput;
}>;


export type TwoFactorLoginMutation = { __typename?: 'Mutation', two_factor_login: { __typename?: 'TwoFactorLoginSuccessResponse', success: boolean, message: string, token: string, refresh_token: string, two_factor_authentication: boolean, user: { __typename?: 'UserModel', username: string, id: string } } };

export type NotificationFragment = { __typename?: 'Notification', id: string, created_at: any, updated_at: any, message: string, url: string };

export type FetchNotificationsByUserIdQueryVariables = Exact<{
  fetchNotificationsByUserIdInput: FetchNotificationsByUserIdInput;
}>;


export type FetchNotificationsByUserIdQuery = { __typename?: 'Query', fetch_notifications_by_user_id: Array<{ __typename?: 'Notification', id: string, created_at: any, updated_at: any, message: string, url: string }> };

export type FetchNotificationByApplicationIdQueryVariables = Exact<{
  fetchNotificationsByApplicationIdInput: FetchNotificationByApplicationIdInput;
}>;


export type FetchNotificationByApplicationIdQuery = { __typename?: 'Query', fetch_notifications_by_application_id: Array<{ __typename?: 'Notification', id: string, created_at: any, updated_at: any, message: string, url: string }> };

export type DeleteNotificationMutationVariables = Exact<{
  deleteNotificationInput: DeleteNotificationInput;
}>;


export type DeleteNotificationMutation = { __typename?: 'Mutation', delete_notification: { __typename?: 'StandardResponse', success: boolean, message: string } };

export type FetchThreadsByUserIdQueryVariables = Exact<{
  fetchThreadsByUserIdInput: FetchThreadsByUserIdInput;
  commentsByUserIdInput: CommentsByUserIdInput;
  fetchThreadCommentsBySort: FetchThreadCommentsBySort;
}>;


export type FetchThreadsByUserIdQuery = { __typename?: 'Query', fetch_threads_by_user_id: Array<{ __typename?: 'ThreadModel', application_id: string, id: string, commenters_ids: Array<string>, title: string, website_url: string, parent_application: { __typename?: 'ApplicationModel', id: string, application_name: string }, thread_comments: { __typename?: 'FetchCommentByThreadIdResponse', comments_count: number, comments: Array<{ __typename?: 'CommentModel', thread_id: string, created_at: any, id: string, plain_text_body: string, application_id: string, _count: { __typename?: 'CountModel', down_vote: number, up_vote: number }, author: { __typename?: 'UserModel', username: string, id: string, avatar: { __typename?: 'AvatarEntity', url: string } }, up_vote: Array<{ __typename?: 'RatingModel', author_id: string, id: string }>, replies: Array<{ __typename?: 'CommentModel', id: string, plain_text_body: string, _count: { __typename?: 'CountModel', down_vote: number } }> }> } }> };

export type FindProfileQueryVariables = Exact<{
  findProfileInput: FindProfileInput;
}>;


export type FindProfileQuery = { __typename?: 'Query', find_profile: { __typename?: 'ProfileEntity', id: string, user: { __typename?: 'UserModel', created_at: any, username: string, last_active: any, status: Status, avatar: { __typename?: 'AvatarEntity', url: string, filename: string, id: string } } } };

export type FetchCommentAndVoteCountQueryVariables = Exact<{
  fetchCommentAndVoteCountInput: FetchCommentAndVoteCountInput;
}>;


export type FetchCommentAndVoteCountQuery = { __typename?: 'Query', fetch_comment_and_vote_count: { __typename?: 'CommentAndVoteCountEntity', comment_count: number, vote_count: number } };

export const ApplicationFieldsFragmentDoc = gql`
    fragment ApplicationFields on ApplicationModel {
  id
  application_name
  plan
  cost
  renewal
  short_name
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
export const LoginResponseFragmentFragmentDoc = gql`
    fragment LoginResponseFragment on LoginResponse {
  success
  message
  token
  refresh_token
  two_factor_authentication
  user {
    username
    id
  }
}
    `;
export const TwoFactorLoginResponseFragmentFragmentDoc = gql`
    fragment TwoFactorLoginResponseFragment on TwoFactorLoginResponse {
  success
  message
  two_factor_authentication
}
    `;
export const NotificationFragmentDoc = gql`
    fragment Notification on Notification {
  id
  created_at
  updated_at
  message
  url
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
export const FetchCommentsByApplicationByShortNameDocument = gql`
    query FetchCommentsByApplicationByShortName($fetchCommentsByApplicationShortNameInput: FetchCommentsByApplicationShortNameInput!) {
  fetch_comments_by_application_short_name(
    fetchCommentsByApplicationShortNameInput: $fetchCommentsByApplicationShortNameInput
  ) {
    comments_count
    comments {
      ...CommentFragment
    }
  }
}
    ${CommentFragmentFragmentDoc}`;

/**
 * __useFetchCommentsByApplicationByShortNameQuery__
 *
 * To run a query within a React component, call `useFetchCommentsByApplicationByShortNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCommentsByApplicationByShortNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCommentsByApplicationByShortNameQuery({
 *   variables: {
 *      fetchCommentsByApplicationShortNameInput: // value for 'fetchCommentsByApplicationShortNameInput'
 *   },
 * });
 */
export function useFetchCommentsByApplicationByShortNameQuery(baseOptions: Apollo.QueryHookOptions<FetchCommentsByApplicationByShortNameQuery, FetchCommentsByApplicationByShortNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchCommentsByApplicationByShortNameQuery, FetchCommentsByApplicationByShortNameQueryVariables>(FetchCommentsByApplicationByShortNameDocument, options);
      }
export function useFetchCommentsByApplicationByShortNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchCommentsByApplicationByShortNameQuery, FetchCommentsByApplicationByShortNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchCommentsByApplicationByShortNameQuery, FetchCommentsByApplicationByShortNameQueryVariables>(FetchCommentsByApplicationByShortNameDocument, options);
        }
export type FetchCommentsByApplicationByShortNameQueryHookResult = ReturnType<typeof useFetchCommentsByApplicationByShortNameQuery>;
export type FetchCommentsByApplicationByShortNameLazyQueryHookResult = ReturnType<typeof useFetchCommentsByApplicationByShortNameLazyQuery>;
export type FetchCommentsByApplicationByShortNameQueryResult = Apollo.QueryResult<FetchCommentsByApplicationByShortNameQuery, FetchCommentsByApplicationByShortNameQueryVariables>;
export const FetchApplicationByShortNameDocument = gql`
    query FetchApplicationByShortName($fetchApplicationByShortNameInput: FetchApplicationByShortNameInput!) {
  fetch_application_by_short_name(
    fetchApplicationByShortNameInput: $fetchApplicationByShortNameInput
  ) {
    ...ApplicationFields
  }
}
    ${ApplicationFieldsFragmentDoc}`;

/**
 * __useFetchApplicationByShortNameQuery__
 *
 * To run a query within a React component, call `useFetchApplicationByShortNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchApplicationByShortNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchApplicationByShortNameQuery({
 *   variables: {
 *      fetchApplicationByShortNameInput: // value for 'fetchApplicationByShortNameInput'
 *   },
 * });
 */
export function useFetchApplicationByShortNameQuery(baseOptions: Apollo.QueryHookOptions<FetchApplicationByShortNameQuery, FetchApplicationByShortNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchApplicationByShortNameQuery, FetchApplicationByShortNameQueryVariables>(FetchApplicationByShortNameDocument, options);
      }
export function useFetchApplicationByShortNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchApplicationByShortNameQuery, FetchApplicationByShortNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchApplicationByShortNameQuery, FetchApplicationByShortNameQueryVariables>(FetchApplicationByShortNameDocument, options);
        }
export type FetchApplicationByShortNameQueryHookResult = ReturnType<typeof useFetchApplicationByShortNameQuery>;
export type FetchApplicationByShortNameLazyQueryHookResult = ReturnType<typeof useFetchApplicationByShortNameLazyQuery>;
export type FetchApplicationByShortNameQueryResult = Apollo.QueryResult<FetchApplicationByShortNameQuery, FetchApplicationByShortNameQueryVariables>;
export const FetchNotificationByApplicationShortNameDocument = gql`
    query FetchNotificationByApplicationShortName($fetchNotificationByApplicationShortNameInput: FetchNotificationByApplicationShortNameInput!) {
  fetch_notifications_by_short_name(
    fetchNotificationByApplicationShortNameInput: $fetchNotificationByApplicationShortNameInput
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
 * __useFetchNotificationByApplicationShortNameQuery__
 *
 * To run a query within a React component, call `useFetchNotificationByApplicationShortNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchNotificationByApplicationShortNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchNotificationByApplicationShortNameQuery({
 *   variables: {
 *      fetchNotificationByApplicationShortNameInput: // value for 'fetchNotificationByApplicationShortNameInput'
 *   },
 * });
 */
export function useFetchNotificationByApplicationShortNameQuery(baseOptions: Apollo.QueryHookOptions<FetchNotificationByApplicationShortNameQuery, FetchNotificationByApplicationShortNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchNotificationByApplicationShortNameQuery, FetchNotificationByApplicationShortNameQueryVariables>(FetchNotificationByApplicationShortNameDocument, options);
      }
export function useFetchNotificationByApplicationShortNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchNotificationByApplicationShortNameQuery, FetchNotificationByApplicationShortNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchNotificationByApplicationShortNameQuery, FetchNotificationByApplicationShortNameQueryVariables>(FetchNotificationByApplicationShortNameDocument, options);
        }
export type FetchNotificationByApplicationShortNameQueryHookResult = ReturnType<typeof useFetchNotificationByApplicationShortNameQuery>;
export type FetchNotificationByApplicationShortNameLazyQueryHookResult = ReturnType<typeof useFetchNotificationByApplicationShortNameLazyQuery>;
export type FetchNotificationByApplicationShortNameQueryResult = Apollo.QueryResult<FetchNotificationByApplicationShortNameQuery, FetchNotificationByApplicationShortNameQueryVariables>;
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
    short_name
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
export const FetchApplicationAuthenticatedUsersDocument = gql`
    query FetchApplicationAuthenticatedUsers($fetchApplicationByShortNameInput: FetchApplicationByShortNameInput!, $authenticatedUserInput: AuthenticatedUserInput!) {
  fetch_application_by_short_name(
    fetchApplicationByShortNameInput: $fetchApplicationByShortNameInput
  ) {
    authenticated_users(authenticatedUserInput: $authenticatedUserInput) {
      confirmed
      last_active
      username
      id
      created_at
    }
  }
}
    `;

/**
 * __useFetchApplicationAuthenticatedUsersQuery__
 *
 * To run a query within a React component, call `useFetchApplicationAuthenticatedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchApplicationAuthenticatedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchApplicationAuthenticatedUsersQuery({
 *   variables: {
 *      fetchApplicationByShortNameInput: // value for 'fetchApplicationByShortNameInput'
 *      authenticatedUserInput: // value for 'authenticatedUserInput'
 *   },
 * });
 */
export function useFetchApplicationAuthenticatedUsersQuery(baseOptions: Apollo.QueryHookOptions<FetchApplicationAuthenticatedUsersQuery, FetchApplicationAuthenticatedUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchApplicationAuthenticatedUsersQuery, FetchApplicationAuthenticatedUsersQueryVariables>(FetchApplicationAuthenticatedUsersDocument, options);
      }
export function useFetchApplicationAuthenticatedUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchApplicationAuthenticatedUsersQuery, FetchApplicationAuthenticatedUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchApplicationAuthenticatedUsersQuery, FetchApplicationAuthenticatedUsersQueryVariables>(FetchApplicationAuthenticatedUsersDocument, options);
        }
export type FetchApplicationAuthenticatedUsersQueryHookResult = ReturnType<typeof useFetchApplicationAuthenticatedUsersQuery>;
export type FetchApplicationAuthenticatedUsersLazyQueryHookResult = ReturnType<typeof useFetchApplicationAuthenticatedUsersLazyQuery>;
export type FetchApplicationAuthenticatedUsersQueryResult = Apollo.QueryResult<FetchApplicationAuthenticatedUsersQuery, FetchApplicationAuthenticatedUsersQueryVariables>;
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
    mutation RegisterUser($registrationInput: RegistrationInput!) {
  register_user(registrationInput: $registrationInput) {
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
 *      registrationInput: // value for 'registrationInput'
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
export const ChangePasswordDocument = gql`
    mutation ChangePassword($changePasswordInput: ChangePasswordInput!) {
  change_password(changePasswordInput: $changePasswordInput) {
    success
    message
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      changePasswordInput: // value for 'changePasswordInput'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($forgotPasswordInput: ForgotPasswordInput!) {
  forgot_password(forgotPasswordInput: $forgotPasswordInput) {
    success
    message
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      forgotPasswordInput: // value for 'forgotPasswordInput'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($loginInput: LoginInput!) {
  login_user(loginInput: $loginInput) {
    ... on LoginResponse {
      ...LoginResponseFragment
    }
    ... on TwoFactorLoginResponse {
      ...TwoFactorLoginResponseFragment
    }
  }
}
    ${LoginResponseFragmentFragmentDoc}
${TwoFactorLoginResponseFragmentFragmentDoc}`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const TwoFactorLoginDocument = gql`
    mutation TwoFactorLogin($twoFactorInput: TwoFactorInput!) {
  two_factor_login(twoFactorInput: $twoFactorInput) {
    success
    message
    token
    refresh_token
    two_factor_authentication
    user {
      username
      id
    }
  }
}
    `;
export type TwoFactorLoginMutationFn = Apollo.MutationFunction<TwoFactorLoginMutation, TwoFactorLoginMutationVariables>;

/**
 * __useTwoFactorLoginMutation__
 *
 * To run a mutation, you first call `useTwoFactorLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTwoFactorLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [twoFactorLoginMutation, { data, loading, error }] = useTwoFactorLoginMutation({
 *   variables: {
 *      twoFactorInput: // value for 'twoFactorInput'
 *   },
 * });
 */
export function useTwoFactorLoginMutation(baseOptions?: Apollo.MutationHookOptions<TwoFactorLoginMutation, TwoFactorLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TwoFactorLoginMutation, TwoFactorLoginMutationVariables>(TwoFactorLoginDocument, options);
      }
export type TwoFactorLoginMutationHookResult = ReturnType<typeof useTwoFactorLoginMutation>;
export type TwoFactorLoginMutationResult = Apollo.MutationResult<TwoFactorLoginMutation>;
export type TwoFactorLoginMutationOptions = Apollo.BaseMutationOptions<TwoFactorLoginMutation, TwoFactorLoginMutationVariables>;
export const FetchNotificationsByUserIdDocument = gql`
    query FetchNotificationsByUserId($fetchNotificationsByUserIdInput: FetchNotificationsByUserIdInput!) {
  fetch_notifications_by_user_id(
    fetchNotificationsByUserIdInput: $fetchNotificationsByUserIdInput
  ) {
    ...Notification
  }
}
    ${NotificationFragmentDoc}`;

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
export const FetchNotificationByApplicationIdDocument = gql`
    query FetchNotificationByApplicationId($fetchNotificationsByApplicationIdInput: FetchNotificationByApplicationIdInput!) {
  fetch_notifications_by_application_id(
    fetchNotificationsByApplicationIdInput: $fetchNotificationsByApplicationIdInput
  ) {
    ...Notification
  }
}
    ${NotificationFragmentDoc}`;

/**
 * __useFetchNotificationByApplicationIdQuery__
 *
 * To run a query within a React component, call `useFetchNotificationByApplicationIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchNotificationByApplicationIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchNotificationByApplicationIdQuery({
 *   variables: {
 *      fetchNotificationsByApplicationIdInput: // value for 'fetchNotificationsByApplicationIdInput'
 *   },
 * });
 */
export function useFetchNotificationByApplicationIdQuery(baseOptions: Apollo.QueryHookOptions<FetchNotificationByApplicationIdQuery, FetchNotificationByApplicationIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchNotificationByApplicationIdQuery, FetchNotificationByApplicationIdQueryVariables>(FetchNotificationByApplicationIdDocument, options);
      }
export function useFetchNotificationByApplicationIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchNotificationByApplicationIdQuery, FetchNotificationByApplicationIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchNotificationByApplicationIdQuery, FetchNotificationByApplicationIdQueryVariables>(FetchNotificationByApplicationIdDocument, options);
        }
export type FetchNotificationByApplicationIdQueryHookResult = ReturnType<typeof useFetchNotificationByApplicationIdQuery>;
export type FetchNotificationByApplicationIdLazyQueryHookResult = ReturnType<typeof useFetchNotificationByApplicationIdLazyQuery>;
export type FetchNotificationByApplicationIdQueryResult = Apollo.QueryResult<FetchNotificationByApplicationIdQuery, FetchNotificationByApplicationIdQueryVariables>;
export const DeleteNotificationDocument = gql`
    mutation DeleteNotification($deleteNotificationInput: DeleteNotificationInput!) {
  delete_notification(deleteNotification: $deleteNotificationInput) {
    success
    message
  }
}
    `;
export type DeleteNotificationMutationFn = Apollo.MutationFunction<DeleteNotificationMutation, DeleteNotificationMutationVariables>;

/**
 * __useDeleteNotificationMutation__
 *
 * To run a mutation, you first call `useDeleteNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNotificationMutation, { data, loading, error }] = useDeleteNotificationMutation({
 *   variables: {
 *      deleteNotificationInput: // value for 'deleteNotificationInput'
 *   },
 * });
 */
export function useDeleteNotificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNotificationMutation, DeleteNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNotificationMutation, DeleteNotificationMutationVariables>(DeleteNotificationDocument, options);
      }
export type DeleteNotificationMutationHookResult = ReturnType<typeof useDeleteNotificationMutation>;
export type DeleteNotificationMutationResult = Apollo.MutationResult<DeleteNotificationMutation>;
export type DeleteNotificationMutationOptions = Apollo.BaseMutationOptions<DeleteNotificationMutation, DeleteNotificationMutationVariables>;
export const FetchThreadsByUserIdDocument = gql`
    query FetchThreadsByUserId($fetchThreadsByUserIdInput: FetchThreadsByUserIdInput!, $commentsByUserIdInput: CommentsByUserIdInput!, $fetchThreadCommentsBySort: FetchThreadCommentsBySort!) {
  fetch_threads_by_user_id(fetchThreadsByUserIdInput: $fetchThreadsByUserIdInput) {
    application_id
    id
    commenters_ids
    title
    website_url
    parent_application {
      id
      application_name
    }
    thread_comments(
      commentsByUserIdInput: $commentsByUserIdInput
      fetchThreadCommentsBySort: $fetchThreadCommentsBySort
    ) {
      comments_count
      comments {
        thread_id
        created_at
        id
        _count {
          down_vote
          up_vote
        }
        author {
          username
          id
          avatar {
            url
          }
        }
        up_vote {
          author_id
          id
        }
        plain_text_body
        application_id
        replies {
          _count {
            down_vote
          }
          id
          plain_text_body
        }
      }
    }
  }
}
    `;

/**
 * __useFetchThreadsByUserIdQuery__
 *
 * To run a query within a React component, call `useFetchThreadsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchThreadsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchThreadsByUserIdQuery({
 *   variables: {
 *      fetchThreadsByUserIdInput: // value for 'fetchThreadsByUserIdInput'
 *      commentsByUserIdInput: // value for 'commentsByUserIdInput'
 *      fetchThreadCommentsBySort: // value for 'fetchThreadCommentsBySort'
 *   },
 * });
 */
export function useFetchThreadsByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FetchThreadsByUserIdQuery, FetchThreadsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchThreadsByUserIdQuery, FetchThreadsByUserIdQueryVariables>(FetchThreadsByUserIdDocument, options);
      }
export function useFetchThreadsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchThreadsByUserIdQuery, FetchThreadsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchThreadsByUserIdQuery, FetchThreadsByUserIdQueryVariables>(FetchThreadsByUserIdDocument, options);
        }
export type FetchThreadsByUserIdQueryHookResult = ReturnType<typeof useFetchThreadsByUserIdQuery>;
export type FetchThreadsByUserIdLazyQueryHookResult = ReturnType<typeof useFetchThreadsByUserIdLazyQuery>;
export type FetchThreadsByUserIdQueryResult = Apollo.QueryResult<FetchThreadsByUserIdQuery, FetchThreadsByUserIdQueryVariables>;
export const FindProfileDocument = gql`
    query FindProfile($findProfileInput: FindProfileInput!) {
  find_profile(findProfileInput: $findProfileInput) {
    id
    user {
      created_at
      username
      last_active
      status
      avatar {
        url
        filename
        id
      }
    }
  }
}
    `;

/**
 * __useFindProfileQuery__
 *
 * To run a query within a React component, call `useFindProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileQuery({
 *   variables: {
 *      findProfileInput: // value for 'findProfileInput'
 *   },
 * });
 */
export function useFindProfileQuery(baseOptions: Apollo.QueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
      }
export function useFindProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export type FindProfileQueryHookResult = ReturnType<typeof useFindProfileQuery>;
export type FindProfileLazyQueryHookResult = ReturnType<typeof useFindProfileLazyQuery>;
export type FindProfileQueryResult = Apollo.QueryResult<FindProfileQuery, FindProfileQueryVariables>;
export const FetchCommentAndVoteCountDocument = gql`
    query FetchCommentAndVoteCount($fetchCommentAndVoteCountInput: FetchCommentAndVoteCountInput!) {
  fetch_comment_and_vote_count(
    fetchCommentAndVoteCountInput: $fetchCommentAndVoteCountInput
  ) {
    comment_count
    vote_count
  }
}
    `;

/**
 * __useFetchCommentAndVoteCountQuery__
 *
 * To run a query within a React component, call `useFetchCommentAndVoteCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCommentAndVoteCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCommentAndVoteCountQuery({
 *   variables: {
 *      fetchCommentAndVoteCountInput: // value for 'fetchCommentAndVoteCountInput'
 *   },
 * });
 */
export function useFetchCommentAndVoteCountQuery(baseOptions: Apollo.QueryHookOptions<FetchCommentAndVoteCountQuery, FetchCommentAndVoteCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchCommentAndVoteCountQuery, FetchCommentAndVoteCountQueryVariables>(FetchCommentAndVoteCountDocument, options);
      }
export function useFetchCommentAndVoteCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchCommentAndVoteCountQuery, FetchCommentAndVoteCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchCommentAndVoteCountQuery, FetchCommentAndVoteCountQueryVariables>(FetchCommentAndVoteCountDocument, options);
        }
export type FetchCommentAndVoteCountQueryHookResult = ReturnType<typeof useFetchCommentAndVoteCountQuery>;
export type FetchCommentAndVoteCountLazyQueryHookResult = ReturnType<typeof useFetchCommentAndVoteCountLazyQuery>;
export type FetchCommentAndVoteCountQueryResult = Apollo.QueryResult<FetchCommentAndVoteCountQuery, FetchCommentAndVoteCountQueryVariables>;
export type ApplicationModelKeySpecifier = ('adult_content' | 'allow_images_and_videos_on_comments' | 'application_name' | 'application_owner' | 'application_owner_id' | 'auth_secret' | 'authenticated_users' | 'authenticated_users_ids' | 'category' | 'comment_policy_summary' | 'comment_policy_url' | 'commenters_users_ids' | 'comments' | 'cost' | 'created_at' | 'default_avatar_url' | 'description' | 'display_comments_when_flagged' | 'email_mods_when_comments_flagged' | 'id' | 'language' | 'links_in_comments' | 'moderators' | 'moderators_ids' | 'plan' | 'pre_comment_moderation' | 'renewal' | 'short_name' | 'theme' | 'threads' | 'updated_at' | 'website_url' | ApplicationModelKeySpecifier)[];
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
	commenters_users_ids?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type AvatarEntityKeySpecifier = ('ETag' | 'created_at' | 'default_avatar' | 'encoding' | 'filename' | 'id' | 'key' | 'updated_at' | 'url' | AvatarEntityKeySpecifier)[];
export type AvatarEntityFieldPolicy = {
	ETag?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	default_avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentAndVoteCountEntityKeySpecifier = ('comment_count' | 'vote_count' | CommentAndVoteCountEntityKeySpecifier)[];
export type CommentAndVoteCountEntityFieldPolicy = {
	comment_count?: FieldPolicy<any> | FieldReadFunction<any>,
	vote_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentModelKeySpecifier = ('_count' | 'application_id' | 'approved' | 'author' | 'created_at' | 'deleted' | 'down_vote' | 'flagged' | 'id' | 'json_body' | 'parent_id' | 'pending' | 'plain_text_body' | 'private_information' | 'replied_to_id' | 'replied_to_user' | 'replies' | 'reply_notification' | 'reports' | 'thread_id' | 'threatening_content' | 'up_vote' | 'updated_at' | 'user_id' | CommentModelKeySpecifier)[];
export type CommentModelFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	application_id?: FieldPolicy<any> | FieldReadFunction<any>,
	approved?: FieldPolicy<any> | FieldReadFunction<any>,
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
	reply_notification?: FieldPolicy<any> | FieldReadFunction<any>,
	reports?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type LoginResponseKeySpecifier = ('message' | 'refresh_token' | 'success' | 'token' | 'two_factor_authentication' | 'user' | LoginResponseKeySpecifier)[];
export type LoginResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	refresh_token?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_authentication?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('add_application_moderator' | 'add_pinned_comment' | 'add_user_to_threads_active_users' | 'approve_comments' | 'block_user' | 'change_comment_settings' | 'change_password' | 'close_poll' | 'confirm_user' | 'create_application' | 'create_comment' | 'create_order' | 'create_poll' | 'create_reply_comment' | 'create_report' | 'delete_comment' | 'delete_many_comments' | 'delete_many_notifications' | 'delete_notification' | 'delete_poll' | 'delete_user' | 'down_vote_comment' | 'forgot_password' | 'login_user' | 'logout_user' | 'regenerate_new_auth_secret' | 'register_user' | 'remove_application' | 'remove_application_moderator' | 'remove_user_from_threads_active_users' | 'toggle_subscription_to_thread' | 'two_factor_login' | 'unblock_user' | 'up_vote_comment' | 'update_application' | 'update_application_comment_rules' | 'update_comment' | 'update_poll_vote' | 'update_user' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	add_application_moderator?: FieldPolicy<any> | FieldReadFunction<any>,
	add_pinned_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	add_user_to_threads_active_users?: FieldPolicy<any> | FieldReadFunction<any>,
	approve_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	block_user?: FieldPolicy<any> | FieldReadFunction<any>,
	change_comment_settings?: FieldPolicy<any> | FieldReadFunction<any>,
	change_password?: FieldPolicy<any> | FieldReadFunction<any>,
	close_poll?: FieldPolicy<any> | FieldReadFunction<any>,
	confirm_user?: FieldPolicy<any> | FieldReadFunction<any>,
	create_application?: FieldPolicy<any> | FieldReadFunction<any>,
	create_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	create_order?: FieldPolicy<any> | FieldReadFunction<any>,
	create_poll?: FieldPolicy<any> | FieldReadFunction<any>,
	create_reply_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	create_report?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_many_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_many_notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_notification?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_poll?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user?: FieldPolicy<any> | FieldReadFunction<any>,
	down_vote_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	forgot_password?: FieldPolicy<any> | FieldReadFunction<any>,
	login_user?: FieldPolicy<any> | FieldReadFunction<any>,
	logout_user?: FieldPolicy<any> | FieldReadFunction<any>,
	regenerate_new_auth_secret?: FieldPolicy<any> | FieldReadFunction<any>,
	register_user?: FieldPolicy<any> | FieldReadFunction<any>,
	remove_application?: FieldPolicy<any> | FieldReadFunction<any>,
	remove_application_moderator?: FieldPolicy<any> | FieldReadFunction<any>,
	remove_user_from_threads_active_users?: FieldPolicy<any> | FieldReadFunction<any>,
	toggle_subscription_to_thread?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_login?: FieldPolicy<any> | FieldReadFunction<any>,
	unblock_user?: FieldPolicy<any> | FieldReadFunction<any>,
	up_vote_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	update_application?: FieldPolicy<any> | FieldReadFunction<any>,
	update_application_comment_rules?: FieldPolicy<any> | FieldReadFunction<any>,
	update_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	update_poll_vote?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationKeySpecifier = ('application_id' | 'created_at' | 'id' | 'message' | 'updated_at' | 'url' | NotificationKeySpecifier)[];
export type NotificationFieldPolicy = {
	application_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OptionEntityKeySpecifier = ('id' | 'option' | 'votes' | OptionEntityKeySpecifier)[];
export type OptionEntityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	option?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PollEntityKeySpecifier = ('closed' | 'created_at' | 'id' | 'options' | 'title' | 'updated_at' | 'voted' | PollEntityKeySpecifier)[];
export type PollEntityFieldPolicy = {
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	voted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileEntityKeySpecifier = ('id' | 'profile_comments' | 'user' | ProfileEntityKeySpecifier)[];
export type ProfileEntityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	profile_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('current_user' | 'fetch_all_applications' | 'fetch_all_threads' | 'fetch_application_by_short_name' | 'fetch_applications_by_owner_id' | 'fetch_comment_and_vote_count' | 'fetch_comments' | 'fetch_comments_by_application_id' | 'fetch_comments_by_application_short_name' | 'fetch_comments_by_thread_id' | 'fetch_notifications' | 'fetch_notifications_by_application_id' | 'fetch_notifications_by_short_name' | 'fetch_notifications_by_user_id' | 'fetch_threads_by_user_id' | 'fetch_users' | 'find_one_application_by_id' | 'find_one_application_by_name' | 'find_one_thread_or_create_one' | 'find_profile' | 'find_thread_by_id' | 'is_user_subscribed_to_thread' | 'resend_email_code' | 'search_user_by_email' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	current_user?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_all_applications?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_all_threads?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_application_by_short_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_applications_by_owner_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comment_and_vote_count?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comments_by_application_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comments_by_application_short_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comments_by_thread_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_notifications_by_application_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_notifications_by_short_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_notifications_by_user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_threads_by_user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_users?: FieldPolicy<any> | FieldReadFunction<any>,
	find_one_application_by_id?: FieldPolicy<any> | FieldReadFunction<any>,
	find_one_application_by_name?: FieldPolicy<any> | FieldReadFunction<any>,
	find_one_thread_or_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	find_profile?: FieldPolicy<any> | FieldReadFunction<any>,
	find_thread_by_id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_user_subscribed_to_thread?: FieldPolicy<any> | FieldReadFunction<any>,
	resend_email_code?: FieldPolicy<any> | FieldReadFunction<any>,
	search_user_by_email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingModelKeySpecifier = ('author_id' | 'id' | RatingModelKeySpecifier)[];
export type RatingModelFieldPolicy = {
	author_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReportModelKeySpecifier = ('created_at' | 'id' | 'reason' | 'updated_at' | 'user_id' | ReportModelKeySpecifier)[];
export type ReportModelFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
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
export type ThreadModelKeySpecifier = ('application_id' | 'commenters_ids' | 'id' | 'parent_application' | 'pinned_comment' | 'pinned_comment_id' | 'poll' | 'subscribed_users' | 'subscribed_users_ids' | 'thread_comments' | 'title' | 'website_url' | ThreadModelKeySpecifier)[];
export type ThreadModelFieldPolicy = {
	application_id?: FieldPolicy<any> | FieldReadFunction<any>,
	commenters_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_application?: FieldPolicy<any> | FieldReadFunction<any>,
	pinned_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	pinned_comment_id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribed_users?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribed_users_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	website_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TwoFactorLoginResponseKeySpecifier = ('message' | 'success' | 'two_factor_authentication' | TwoFactorLoginResponseKeySpecifier)[];
export type TwoFactorLoginResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_authentication?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TwoFactorLoginSuccessResponseKeySpecifier = ('message' | 'refresh_token' | 'success' | 'token' | 'two_factor_authentication' | 'user' | TwoFactorLoginSuccessResponseKeySpecifier)[];
export type TwoFactorLoginSuccessResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	refresh_token?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_authentication?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserModelKeySpecifier = ('applications_joined_ids' | 'avatar' | 'blocked_users' | 'confirmed' | 'created_at' | 'email' | 'id' | 'last_active' | 'status' | 'two_factor_authentication' | 'updated_at' | 'user_role' | 'username' | UserModelKeySpecifier)[];
export type UserModelFieldPolicy = {
	applications_joined_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	blocked_users?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_active?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_authentication?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_role?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteEntityKeySpecifier = ('id' | 'user_id' | VoteEntityKeySpecifier)[];
export type VoteEntityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ApplicationModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationModelKeySpecifier | (() => undefined | ApplicationModelKeySpecifier),
		fields?: ApplicationModelFieldPolicy,
	},
	AvatarEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvatarEntityKeySpecifier | (() => undefined | AvatarEntityKeySpecifier),
		fields?: AvatarEntityFieldPolicy,
	},
	CommentAndVoteCountEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentAndVoteCountEntityKeySpecifier | (() => undefined | CommentAndVoteCountEntityKeySpecifier),
		fields?: CommentAndVoteCountEntityFieldPolicy,
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
	OptionEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OptionEntityKeySpecifier | (() => undefined | OptionEntityKeySpecifier),
		fields?: OptionEntityFieldPolicy,
	},
	PollEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PollEntityKeySpecifier | (() => undefined | PollEntityKeySpecifier),
		fields?: PollEntityFieldPolicy,
	},
	ProfileEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileEntityKeySpecifier | (() => undefined | ProfileEntityKeySpecifier),
		fields?: ProfileEntityFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RatingModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingModelKeySpecifier | (() => undefined | RatingModelKeySpecifier),
		fields?: RatingModelFieldPolicy,
	},
	ReportModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReportModelKeySpecifier | (() => undefined | ReportModelKeySpecifier),
		fields?: ReportModelFieldPolicy,
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
	TwoFactorLoginResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TwoFactorLoginResponseKeySpecifier | (() => undefined | TwoFactorLoginResponseKeySpecifier),
		fields?: TwoFactorLoginResponseFieldPolicy,
	},
	TwoFactorLoginSuccessResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TwoFactorLoginSuccessResponseKeySpecifier | (() => undefined | TwoFactorLoginSuccessResponseKeySpecifier),
		fields?: TwoFactorLoginSuccessResponseFieldPolicy,
	},
	UserModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserModelKeySpecifier | (() => undefined | UserModelKeySpecifier),
		fields?: UserModelFieldPolicy,
	},
	VoteEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteEntityKeySpecifier | (() => undefined | VoteEntityKeySpecifier),
		fields?: VoteEntityFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;