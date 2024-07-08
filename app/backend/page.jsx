'use client'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from '../../components/GetUsers/GetUsers'
import Form from '../../components/Form/Form'

const errorLink = onError(( {graphqlErrors, networkError}) => {
	if (graphqlErrors) {
		graphqlErrors.map(({ message, location, path }) => {
			alert(`Graphql error ${message}`);
		});
	}
});

const link = from([
	errorLink,
	new HttpLink({ uri: "https://paatee-api.onrender.com/graphql" }),
]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});


export default function Backend() {
	return <ApolloProvider client={client}>
		<GetUsers/>
		<Form/>
	</ApolloProvider>
}
