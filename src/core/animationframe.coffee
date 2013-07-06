do ->
  vendors = ['ms', 'moz', 'webkit', 'o']

  define 'requestAnimationFrame', ['root'], (root) ->
    lastTime = 0
    {requestAnimationFrame} = root
  
    unless requestAnimationFrame
      for x in vendors
        requestAnimationFrame = root["#{x}RequestAnimationFrame"]
        break if requestAnimationFrame
  
    unless requestAnimationFrame
      requestAnimationFrame = (callback, element) ->
        currTime = Date.now()
        timeToCall = Math.max 0, 16 - (currTime - lastTime)
        id = root.setTimeout((-> callback(currTime + timeToCall)), timeToCall)
        lastTime = currTime + timeToCall
        id
  
    requestAnimationFrame
  
  define 'cancelAnimationFrame', ['root'], (root) ->
    {cancelAnimationFrame} = root
  
    unless cancelAnimationFrame
      for x in vendors
        cancelAnimationFrame = root["#{x}CancelAnimationFrame"] or
          root["#{x}CancelRequestAnimationFrame"]
        break if cancelAnimationFrame
  
    unless cancelAnimationFrame
      cancelAnimationFrame = (id) -> root.clearTimeout id
  
    cancelAnimationFrame