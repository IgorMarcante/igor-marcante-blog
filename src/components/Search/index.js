import React from "react"
import { algoliasearch } from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch';

import Hit from "./Hit"
import * as S from "./styled"

const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => (
    <S.SearchWrapper>
        <InstantSearch 
            searchClient={searchClient} 
            indexName={algolia.indexName}
        >
            {/* SearchBox com traduções completas */}
            <SearchBox 
                autoFocus 
                placeholder="Pesquisar..."
            />

            {/* Componente Stats com tradução correta */}
            <Stats
                translations={{
                    stats(nbHits, processingTimeMS) {
                        return `${nbHits.toLocaleString('pt-BR')} resultados encontrados em ${processingTimeMS} milissegundos`
                    }
                }}
            />

            <Hits hitComponent={Hit} />
        </InstantSearch>
    </S.SearchWrapper>
)

export default Search