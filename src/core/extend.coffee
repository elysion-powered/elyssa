define 'extend', ->
  
  ###
   Extending objects
  ###
  extend = (target, objects...) ->
    for obj in objects
      for key, value of obj
        target[key] = value
  
    target