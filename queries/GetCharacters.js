import { gql } from "@apollo/client";

export const GetCharacters = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        image
        episode {
          name
        }
        origin {
          name
        }
        location {
          id
          name
        }
      }
    }
  }
`;
