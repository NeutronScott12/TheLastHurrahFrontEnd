import { InMemoryCache } from '@apollo/client'
import { IS_LOGGED_IN } from '../graphql/graphql'

// export const isLoggedInVar = makeVar<Boolean>(false)

const localCache: InMemoryCache = new InMemoryCache({
	// typePolicies: {
	//     Query: {
	//         fields: {
	//             isLoggedIn: {
	//                 read() {
	//                     return isLoggedInVar()
	//                 },
	//             },
	//         },
	//     },
	// },
})

localCache.writeQuery({
	query: IS_LOGGED_IN,
	data: {
		isLoggedIn: false,
	},
})

export const cache = localCache
