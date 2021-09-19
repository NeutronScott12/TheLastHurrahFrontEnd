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
};

export type AddModeratorInput = {
  application_id: Scalars['String'];
  moderator_id: Scalars['String'];
};

export type ApplicationModel = {
  __typename?: 'ApplicationModel';
  application_members: Array<UserModel>;
  application_name: Scalars['String'];
  application_owner: UserModel;
  application_owner_id: Scalars['String'];
  comments: Array<CommentModel>;
  cost: Scalars['Float'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  members_ids: Array<Scalars['String']>;
  moderators: Array<UserModel>;
  moderators_ids: Array<Scalars['String']>;
  plan: Scalars['String'];
  renewal?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type CommentModel = {
  __typename?: 'CommentModel';
  application_id: Scalars['String'];
  author: UserModel;
  body: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  ratings: RatingModel;
  replies: Array<CommentModel>;
  thread: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type CreateApplicationInput = {
  application_name: Scalars['String'];
};

export type CreateCommentInput = {
  application_id: Scalars['String'];
  author_id: Scalars['String'];
  body: Scalars['String'];
  thread: Scalars['String'];
};

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
  confirm_user: StandardResponseModel;
  create_application: ApplicationModel;
  create_comment: CommentModel;
  delete_comment: StandardResponseModel;
  delete_user: StandardResponseModel;
  forgot_password: StandardResponseModel;
  login_user: LoginResponse;
  register_user: StandardResponseModel;
  remove_application: ApplicationModel;
  remove_application_moderator: ApplicationModel;
  reset_password: StandardResponseModel;
  update_application: ApplicationModel;
  update_comment: CommentModel;
};


export type MutationAdd_Application_ModeratorArgs = {
  addModeratorInput: AddModeratorInput;
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


export type MutationDelete_CommentArgs = {
  commentId: Scalars['String'];
};


export type MutationDelete_UserArgs = {
  email: Scalars['String'];
};


export type MutationForgot_PasswordArgs = {
  email: Scalars['String'];
  redirect_url?: Maybe<Scalars['String']>;
};


export type MutationLogin_UserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegister_UserArgs = {
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


export type MutationUpdate_ApplicationArgs = {
  updateApplicationInput: UpdateApplicationInput;
};


export type MutationUpdate_CommentArgs = {
  UpdateCommentInput: UpdateCommentInput;
};

export type Query = {
  __typename?: 'Query';
  current_user: UserModel;
  fetch_all_applications: Array<ApplicationModel>;
  fetch_applications_by_owner_id: Array<ApplicationModel>;
  fetch_comments: Array<CommentModel>;
  fetch_users: Array<UserModel>;
  find_one_application_by_id: ApplicationModel;
  find_one_application_by_name: ApplicationModel;
  resend_email_code: StandardResponseModel;
  search_user_by_email: UserModel;
};


export type QueryFind_One_Application_By_IdArgs = {
  id: Scalars['String'];
};


export type QueryFind_One_Application_By_NameArgs = {
  name: Scalars['String'];
};


export type QueryResend_Email_CodeArgs = {
  email: Scalars['String'];
  redirect_url: Scalars['String'];
};


export type QuerySearch_User_By_EmailArgs = {
  email: Scalars['String'];
};

export type RatingModel = {
  __typename?: 'RatingModel';
  authorId: Scalars['String'];
  comment: CommentModel;
  id: Scalars['String'];
};

export type RemoveModeratorInput = {
  application_id: Scalars['String'];
  moderator_id: Scalars['String'];
};

export type StandardResponseModel = {
  __typename?: 'StandardResponseModel';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type UpdateApplicationInput = {
  application_name: Scalars['String'];
  id: Scalars['String'];
};

export type UpdateCommentInput = {
  body: Scalars['String'];
  comment_id: Scalars['String'];
};

export type UserModel = {
  __typename?: 'UserModel';
  confirmed: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_role: Scalars['String'];
  username: Scalars['String'];
};

export type FetchUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUsersQuery = { __typename?: 'Query', fetch_users: Array<{ __typename?: 'UserModel', id: string, username: string, email: string, confirmed: boolean }> };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', current_user: { __typename?: 'UserModel', id: string, email: string } };

export type SearchUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type SearchUserByEmailQuery = { __typename?: 'Query', search_user_by_email: { __typename?: 'UserModel', id: string, email: string, username: string } };

export type ApplicationFieldsFragment = { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: Maybe<any>, created_at: any, updated_at: any, members_ids: Array<string>, application_owner: { __typename?: 'UserModel', id: string }, comments: Array<{ __typename?: 'CommentModel', id: string }>, application_members: Array<{ __typename?: 'UserModel', email: string, id: string }>, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> };

export type FetchApplicationByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FetchApplicationByNameQuery = { __typename?: 'Query', find_one_application_by_name: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: Maybe<any>, created_at: any, updated_at: any, members_ids: Array<string>, application_owner: { __typename?: 'UserModel', id: string }, comments: Array<{ __typename?: 'CommentModel', id: string }>, application_members: Array<{ __typename?: 'UserModel', email: string, id: string }>, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type FetchApplicationsByOwnerQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchApplicationsByOwnerQuery = { __typename?: 'Query', fetch_all_applications: Array<{ __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: Maybe<any>, created_at: any, updated_at: any, members_ids: Array<string>, application_owner: { __typename?: 'UserModel', id: string }, comments: Array<{ __typename?: 'CommentModel', id: string }>, application_members: Array<{ __typename?: 'UserModel', email: string, id: string }>, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> }> };

export type FindOneApplicationByIdQueryVariables = Exact<{
  findOneApplicationByIdId: Scalars['String'];
}>;


export type FindOneApplicationByIdQuery = { __typename?: 'Query', find_one_application_by_id: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: Maybe<any>, created_at: any, updated_at: any, members_ids: Array<string>, application_owner: { __typename?: 'UserModel', id: string }, comments: Array<{ __typename?: 'CommentModel', id: string }>, application_members: Array<{ __typename?: 'UserModel', email: string, id: string }>, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type CreateApplicationMutationVariables = Exact<{
  createApplicationInput: CreateApplicationInput;
}>;


export type CreateApplicationMutation = { __typename?: 'Mutation', create_application: { __typename?: 'ApplicationModel', application_name: string, comments: Array<{ __typename?: 'CommentModel', id: string }>, application_members: Array<{ __typename?: 'UserModel', email: string }> } };

export type RemoveApplicationModeratorMutationVariables = Exact<{
  removeModeratorInput: RemoveModeratorInput;
}>;


export type RemoveApplicationModeratorMutation = { __typename?: 'Mutation', remove_application_moderator: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: Maybe<any>, created_at: any, updated_at: any, members_ids: Array<string>, application_owner: { __typename?: 'UserModel', id: string }, comments: Array<{ __typename?: 'CommentModel', id: string }>, application_members: Array<{ __typename?: 'UserModel', email: string, id: string }>, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

export type AddApplicationModeratorMutationVariables = Exact<{
  addModeratorInput: AddModeratorInput;
}>;


export type AddApplicationModeratorMutation = { __typename?: 'Mutation', add_application_moderator: { __typename?: 'ApplicationModel', id: string, application_name: string, plan: string, cost: number, renewal?: Maybe<any>, created_at: any, updated_at: any, members_ids: Array<string>, application_owner: { __typename?: 'UserModel', id: string }, comments: Array<{ __typename?: 'CommentModel', id: string }>, application_members: Array<{ __typename?: 'UserModel', email: string, id: string }>, moderators: Array<{ __typename?: 'UserModel', email: string, username: string, id: string }> } };

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

export const ApplicationFieldsFragmentDoc = gql`
    fragment ApplicationFields on ApplicationModel {
  id
  application_name
  plan
  cost
  renewal
  created_at
  updated_at
  members_ids
  application_owner {
    id
  }
  comments {
    id
  }
  application_members {
    email
    id
  }
  moderators {
    email
    username
    id
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
    email
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
    comments {
      id
    }
    application_members {
      email
    }
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
export type ApplicationModelKeySpecifier = ('application_members' | 'application_name' | 'application_owner' | 'application_owner_id' | 'comments' | 'cost' | 'created_at' | 'id' | 'members_ids' | 'moderators' | 'moderators_ids' | 'plan' | 'renewal' | 'updated_at' | ApplicationModelKeySpecifier)[];
export type ApplicationModelFieldPolicy = {
	application_members?: FieldPolicy<any> | FieldReadFunction<any>,
	application_name?: FieldPolicy<any> | FieldReadFunction<any>,
	application_owner?: FieldPolicy<any> | FieldReadFunction<any>,
	application_owner_id?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	members_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	moderators?: FieldPolicy<any> | FieldReadFunction<any>,
	moderators_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	plan?: FieldPolicy<any> | FieldReadFunction<any>,
	renewal?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentModelKeySpecifier = ('application_id' | 'author' | 'body' | 'created_at' | 'id' | 'ratings' | 'replies' | 'thread' | 'updated_at' | 'user_id' | CommentModelKeySpecifier)[];
export type CommentModelFieldPolicy = {
	application_id?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	replies?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginResponseKeySpecifier = ('message' | 'refresh_token' | 'success' | 'token' | 'user' | LoginResponseKeySpecifier)[];
export type LoginResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	refresh_token?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('add_application_moderator' | 'confirm_user' | 'create_application' | 'create_comment' | 'delete_comment' | 'delete_user' | 'forgot_password' | 'login_user' | 'register_user' | 'remove_application' | 'remove_application_moderator' | 'reset_password' | 'update_application' | 'update_comment' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	add_application_moderator?: FieldPolicy<any> | FieldReadFunction<any>,
	confirm_user?: FieldPolicy<any> | FieldReadFunction<any>,
	create_application?: FieldPolicy<any> | FieldReadFunction<any>,
	create_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_comment?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user?: FieldPolicy<any> | FieldReadFunction<any>,
	forgot_password?: FieldPolicy<any> | FieldReadFunction<any>,
	login_user?: FieldPolicy<any> | FieldReadFunction<any>,
	register_user?: FieldPolicy<any> | FieldReadFunction<any>,
	remove_application?: FieldPolicy<any> | FieldReadFunction<any>,
	remove_application_moderator?: FieldPolicy<any> | FieldReadFunction<any>,
	reset_password?: FieldPolicy<any> | FieldReadFunction<any>,
	update_application?: FieldPolicy<any> | FieldReadFunction<any>,
	update_comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('current_user' | 'fetch_all_applications' | 'fetch_applications_by_owner_id' | 'fetch_comments' | 'fetch_users' | 'find_one_application_by_id' | 'find_one_application_by_name' | 'resend_email_code' | 'search_user_by_email' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	current_user?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_all_applications?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_applications_by_owner_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	fetch_users?: FieldPolicy<any> | FieldReadFunction<any>,
	find_one_application_by_id?: FieldPolicy<any> | FieldReadFunction<any>,
	find_one_application_by_name?: FieldPolicy<any> | FieldReadFunction<any>,
	resend_email_code?: FieldPolicy<any> | FieldReadFunction<any>,
	search_user_by_email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingModelKeySpecifier = ('authorId' | 'comment' | 'id' | RatingModelKeySpecifier)[];
export type RatingModelFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StandardResponseModelKeySpecifier = ('message' | 'success' | StandardResponseModelKeySpecifier)[];
export type StandardResponseModelFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserModelKeySpecifier = ('confirmed' | 'created_at' | 'email' | 'id' | 'updated_at' | 'user_role' | 'username' | UserModelKeySpecifier)[];
export type UserModelFieldPolicy = {
	confirmed?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
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
	LoginResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginResponseKeySpecifier | (() => undefined | LoginResponseKeySpecifier),
		fields?: LoginResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RatingModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingModelKeySpecifier | (() => undefined | RatingModelKeySpecifier),
		fields?: RatingModelFieldPolicy,
	},
	StandardResponseModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StandardResponseModelKeySpecifier | (() => undefined | StandardResponseModelKeySpecifier),
		fields?: StandardResponseModelFieldPolicy,
	},
	UserModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserModelKeySpecifier | (() => undefined | UserModelKeySpecifier),
		fields?: UserModelFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;