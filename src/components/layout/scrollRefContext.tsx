import React, { createContext, useContext } from 'react';

export const ScrollRefContext = createContext<{
  scrollRef: null | React.MutableRefObject<HTMLDivElement | null>;
}>({
  scrollRef: null,
});

export const useScrollRef = () => useContext(ScrollRefContext);
