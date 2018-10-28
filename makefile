# Paths
main_build := webpack/webpack.main.build.js
main_dev := webpack/webpack.main.dev.js
renderer_scepter_build := webpack/scepter/webpack.renderer.build.js
renderer_scepter_dev := webpack/scepter/webpack.renderer.dev.js
renderer_execute_build := webpack/execute/webpack.renderer.build.js
renderer_execute_dev := webpack/execute/webpack.renderer.dev.js

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

dev: r-scepter electron

build: renderer-build electron-build

r-scepter:
	@echo "[INFO] Starting scepter renderer development"
	@$(webpack_dev_server) --config $(renderer_scepter_dev)

r-scepter-build:
	@echo "[INFO] Starting scepter renderer production build"
	@$(webpack) --config $(renderer_scepter_build)

r-execute:
	@echo "[INFO] Starting execute renderer development"
	@$(webpack_dev_server) --config $(renderer_execute_dev)

r-execute-build:
	@echo "[INFO] Starting execute renderer production build"
	@$(webpack) --config $(renderer_execute_build)

electron:
	@echo "[INFO] Starting electron development"
ifeq ($(OS), Windows_NT)
	@-setx NODE_ENV development
else
	@-export NODE_ENV=development
endif
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
