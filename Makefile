CLOSURE_WHITESPACE=closure --compilation_level WHITESPACE_ONLY
CLOSURE_SIMPLE=closure --compilation_level SIMPLE_OPTIMIZATIONS
CLOSURE_ADVANCED=closure --compilation_level ADVANCED_OPTIMIZATIONS

CLOSURE=$(CLOSURE_ADVANCED)

DIST=dist

TARGETS=$(DIST)/async-sha256-min.js $(DIST)/async-sha256-min.js.gz

.PHONY: all

all: $(TARGETS)

%.gz: %
	umask 0022; zopfli --i250 $<

$(DIST)/%-min.js: %.js
	$(CLOSURE) --js $< --js_output_file $@

clean:
	rm $(TARGETS) dist/* 2> /dev/null || true
