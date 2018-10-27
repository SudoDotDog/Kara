# Paths
main_build := webpack/webpack.main.build.js
main_dev := webpack/webpack.main.dev.js
renderer_build := webpack/webpack.renderer.build.js
renderer_dev := webpack/webpack.renderer.dev.js

# NPX functions
ifeq ($(OS), Windows_NT)
	tsc := .\node_modules\.bin\tsc
	mocha := .\node_modules\.bin\mocha
	webpack := .\node_modules\.bin\webpack
	webpack_dev_server := .\node_modules\.bin\webpack-dev-server
else
	tsc := node_modules/.bin/tsc
	mocha := node_modules/.bin/mocha
	webpack := node_modules/.bin/webpack
	webpack_dev_server := .\node_modules\.bin\webpack-dev-server
endif

kara: dev

dev: renderer electron

build: renderer-build electron-build

renderer:
	@echo "[INFO] Starting renderer development"
	@$(webpack_dev_server) --config $(renderer_dev)

renderer-build:
	@echo "[INFO] Starting renderer production build"
	@$(webpack) --config $(renderer_build)

electron:
	@echo "[INFO] Starting electron development"
	@$(webpack) --config $(main_dev)
	@electron app

electron-build:
	@echo "[INFO] Starting electron production build"
	@$(webpack) --config $(main_build)

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
