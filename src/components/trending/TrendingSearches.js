
import React, { Suspense } from 'react';
import useNearScreen from "hooks/useNearScreen"

const TrendingSearches = React.lazy(
    () => import('./Trendings')
)

export default function LazyTrending () {
    const { isNearScreen, elementRef } = useNearScreen({ distance: '100px'})

    return <div ref={elementRef} >
        <Suspense fullback={ 'Estoy cargando... ☯☯☯' }>
            { isNearScreen ? <TrendingSearches /> : null }
        </Suspense>
    </div>
}