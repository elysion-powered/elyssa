do (window = @, document) -> 
  'use strict';
  
  ###
    Console object fixes
  ###
  noop = ->

  methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn']

  console = (window.console or= {})

  for i in methods
    method = methods[i]
    
    console[method] or= noop

  ###
   Extending objects
  ###
  window.extend = (target, objects...) ->
    for obj in objects
      for key, value of obj
        target[key] = value
  
    target

  ###
    Cloning objects
  ###
  window.clone = (obj) ->
    unless obj? or typeof obj isnt 'object'
      return obj
  
    if obj instanceof Date
      return new Date(obj.getTime()) 
  
    if obj instanceof RegExp
      flags = ''
      flags += 'g' if obj.global?
      flags += 'i' if obj.ignoreCase?
      flags += 'm' if obj.multiline?
      flags += 'y' if obj.sticky?
      return new RegExp(obj.source, flags) 
  
    newInstance = new obj.constructor()
  
    for key of obj
      newInstance[key] = window.clone obj[key]
  
    newInstance

  ###
   requestAnim shim layer by Paul Irish
  ###
  lastTime = 0
  vendors = ['ms', 'moz', 'webkit', 'o']

  for x in vendors
    window.requestAnimationFrame = window["#{x}RequestAnimationFrame"]
    window.cancelAnimationFrame = window["#{x}CancelAnimationFrame"] or window["#{x}CancelRequestAnimationFrame"]

  unless window.requestAnimationFrame
    window.requestAnimationFrame = (callback, element) ->
      currTime = Date.now()
      timeToCall = Math.max(0, 16 - (currTime - lastTime))
      id = window.setTimeout(->
        callback currTime + timeToCall
      , timeToCall)
      lastTime = currTime + timeToCall
      id
      
  unless window.cancelAnimationFrame
    window.cancelAnimationFrame = (id) ->
      window.clearTimeout id

  null # Return null

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