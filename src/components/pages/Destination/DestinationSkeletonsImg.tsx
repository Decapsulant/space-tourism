import React from "react"
import ContentLoader from "react-content-loader"

const DestinationSleletonImg = (props:any) => (
  <ContentLoader 
    speed={2}
    width={445}
    height={446}
    viewBox="0 0 445 446"
    backgroundColor="#282226"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="223" cy="223" r="222" />
  </ContentLoader>
)

export default DestinationSleletonImg