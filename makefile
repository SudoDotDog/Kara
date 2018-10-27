# Paths
main_build := webpack/webpack.main.build.json
main_dev := webpack/webpack.main.dev.json

# NPX functions
ifeq ($(OS), Windows_NT)
	tsc := .\node_modules\.bin\tsc
	mocha := .\node_modules\.bin\mocha
	webpack := .\node_modules\.bin\webpack
else
	tsc := node_modules/.bin/tsc
	mocha := node_modules/.bin/mocha
	webpack := node_modules/.bin/webpack
endif

kara: electron

electron:
	@echo "[INFO] Starting electron development"
	@$(webpack) --config $(main_dev)
	@electron app

tests:
	@echo "[INFO] Testing with Mocha"
ifeq ($(OS), Windows_NT)
	@-setx NODE_ENV test
else
	@-export NODE_ENV=test
endif
	@$(mocha)

cov:
	@echo "[INFO] Testing with Nyc and Mocha"
ifeq ($(OS), Windows_NT)
	@-setx NODE_ENV test
else
	@-export NODE_ENV=test
endif
	@nyc $(mocha)

install:
	@echo "[INFO] Installing Dependencies"
	@npm install
	@npm install --only=dev

clean:
ifeq ($(OS), Windows_NT)
	@echo "[INFO] Skipping"
else
	@echo "[INFO] Cleaning dist files"
	@rm -rf dist
	@rm -rf .nyc_output
	@rm -rf coverage
endif
