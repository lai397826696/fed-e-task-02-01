// TODO: site logics

$(($) => {
  const $body = $('html, body')

  $('#scroll_top').on('click', () => {
    $body.animate({ scrollTop: 0 }, 600)
    return false
  })

  // $('body').on('click', () => {
  //   console.log(1213);
  // })
})
