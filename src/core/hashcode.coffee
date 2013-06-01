do (String) ->
  ###
    Provides a hashcode for strings
  ###
  String::hashCode = ->
    hash = 0
  
    if @length == 0
      return hash
  
    for i in @
      char = @charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash # Convert to 32bit integer
  
    hash