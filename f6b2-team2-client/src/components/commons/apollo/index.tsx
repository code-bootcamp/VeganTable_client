// apollo 설정

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io", // 우리 백엔드 서버가 필요
  cache: new InMemoryCache(),
});

export default function ApolloSetting(props) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
