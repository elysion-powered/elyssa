COFFEE = coffee
DOCGEN = codo

SOURCE = src
OUTPUT = js
DOCOUTPUT = doc

default: all

core:
	$(COFFEE) -j $(OUTPUT)/Elyssa.Core.js -c $(SOURCE)/core/*.coffee

types:
	$(COFFEE) -j $(OUTPUT)/Elyssa.Types.js -c $(SOURCE)/types/*.coffee

doc:
	$(DOCGEN) -o $(DOCOUTPUT) src/*/*.coffee  

clean:
	rm -rf $(OUTPUT)/*.js

all:
	make clean
	make doc
	make core
	make types
	cat $(OUTPUT)/Elyssa.*.js > $(OUTPUT)/Elyssa.js