'use clients'
import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
	query {
		getAllUser {
			email
			firstName
			lastName
			role
		}
	}
`;
