import { ApolloClient, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
// import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
// import { sha256 } from 'crypto-hash'

import { cache } from './cache'
import { typeDefs } from './typeDefs'

const uri =
	process.env.NODE_ENV === 'production'
		? 'https://lasthurrah/graphql'
		: 'http://localhost:4000/graphql'

const httpLink = createHttpLink({
	uri,
})
// const linkChain = createPersistedQueryLink({ sha256 }).concat(httpLink)

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token')

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	typeDefs,
})
