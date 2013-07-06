define 'clone', ->

  ###
    Cloning objects
  ###
  clone = (obj) ->
    unless obj? or typeof obj isnt 'object'
      return obj
  
    if obj instanceof Date
      return new Date obj.getTime()
  
    if obj instanceof RegExp
      flags = ''
      flags += 'g' if obj.global?
      flags += 'i' if obj.ignoreCase?
      flags += 'm' if obj.multiline?
      flags += 'y' if obj.sticky?
      return new RegExp sobj.source, flags
  
    newInstance = new obj.constructor()
  
    for key of obj
      newInstance[key] = window.clone obj[key]
  
    newInstance