define 'deleteitem', ->
  deleteItem = (obj, item) ->
    if Array.isArray obj
      i for i, num in obj when num isnt item
    else
      newObject = {}
      newObject[key] = obj[key] for key of obj when key isnt item
      newObject
