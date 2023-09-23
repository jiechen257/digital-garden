export const transformSidebarItems = (sidebarArr: any[]) => {
  return sidebarArr.map((item) => {
    return {
      text: item[0],
      link: item[1]
    }
  })
}
