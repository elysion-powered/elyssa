COFFEE = coffee
DOCGEN = codo
MINIFIER = uglifyjs

SOURCE = src
OUTPUT = js
DOCOUTPUT = ./doc

default: all

core:
	$(COFFEE) -j $(OUTPUT)/Elyssa.Core.js -c $(SOURCE)/core/*.coffee

assets:
	$(COFFEE) -j $(OUTPUT)/Elyssa.Assets.js -c $(SOURCE)/assets/*.coffee

types:
	$(COFFEE) -j $(OUTPUT)/Elyssa.Types.js -c $(SOURCE)/types/*.coffee

graphics:
	$(COFFEE) -j $(OUTPUT)/Elyssa.Graphics.js -c $(SOURCE)/graphics/*.coffee

component:
	$(COFFEE) -j $(OUTPUT)/Elyssa.Component.js -c $(SOURCE)/component/*.coffee

scene:
	$(COFFEE) -j $(OUTPUT)/Elyssa.Scene.js -c $(SOURCE)/scene/*.coffee

documentation:
	$(DOCGEN) -o $(DOCOUTPUT) $(SOURCE)/*/*.coffee  

clean:
	rm -rf $(OUTPUT)/*.js

all:
	make clean
	make documentation
	make core
	make assets
	make types
	make graphics
	make component
	make scene
	cat $(OUTPUT)/Elyssa.*.js > $(OUTPUT)/Elyssa.js
	$(MINIFIER) $(OUTPUT)/Elyssa.js > $(OUTPUT)/Elyssa.min.js