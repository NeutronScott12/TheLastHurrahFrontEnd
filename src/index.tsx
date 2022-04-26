import React from 'react'
import { createRoot } from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import reportWebVitals from './reportWebVitals'
import { ApolloProvider } from '@apollo/client'
import App from './App'
import { client } from './apollo'
// import 'antd/dist/antd.css'

import { BrowserRouter as Router } from 'react-router-dom'

const root = createRoot(document.getElementById('root')!)

root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router>
				<App />
			</Router>
		</ApolloProvider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
