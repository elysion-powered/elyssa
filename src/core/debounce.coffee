define 'debounce', [root], (root) ->
  debounce = (func, threshold = 100, execAsap) ->
    timeout = null
    (args...) ->
      obj = @
      delayed = ->
        func.apply @, args unless execAsap
        timeout = null
      if timeout
        root.clearTimeout timeout
      else
        func.apply obj, args if execAsap
      timeout = root.setTimout delayed, threshold
