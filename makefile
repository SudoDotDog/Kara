# Paths
main_build := webpack/webpack.main.build.ts
main_dev := webpack/webpack.main.dev.ts

renderer_center_build := webpack/center/webpack.renderer.build.js
renderer_center_dev := webpack/center/webpack.renderer.dev.js
renderer_scepter_build := webpack/scepter/webpack.renderer.build.js
renderer_scepter_dev := webpack/scepter/webpack.renderer.dev.js
renderer_execute_build := webpack/execute/webpack.renderer.build.js
renderer_execute_dev := webpack/execute/webpack.renderer.dev.js

script_tsconfig := typescript/tsconfig.script.json

# NPX functions
ifeq ($(OS), Windows_NT)
	tsc := .\node_modules\.bin\tsc
	webpack := .\node_modules\.bin\webpack
	webpack_dev_server := .\node_modules\.bin\webpack-dev-server
	electron_builder := ../node_modules/.bin/electron-builder
else
	tsc := node_modules/.bin/tsc
	webpack := node_modules/.bin/webpack
	webpack_dev_server := node_modules/.bin/webpack-dev-server
	electron_builder := ../node_modules/.bin/electron-builder
endif
mocha := node_modules/.bin/mocha

kara: dev

dev: r-scepter electron

pack: build electron-builder

electron-builder:
	@cd app && $(electron_builder)

build: renderer-build electron-build
	@echo "[INFO] Build Complete"

bump-version: compile-script
	@echo "[INFO] Bumping version"
	@node ./script-dist/bump-version.js

download-binaries: compile-script
	@echo "[INFO] Downloading binaries"
	@node ./script-dist/download-binaries.js

renderer-build: r-scepter-build r-execute-build r-center-build

r-center:
	@echo "[INFO] Starting center renderer development"
	@$(webpack_dev_server) --config $(renderer_center_dev)

r-center-build:
	@echo "[INFO] Starting center renderer production build"
	@$(webpack) --config $(renderer_center_build)

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

compile-script:
	@echo "[INFO] Compiling Scripts"
	@$(tsc) --p $(script_tsconfig)

electron:
	@echo "[INFO] Starting electron development"
	@$(webpack) --config $(main_dev)
	@NODE_ENV=development electron app

electron-build:
	@echo "[INFO] Starting electron production build"
	@$(webpack) --config $(main_build)

tests:
	@echo "[INFO] Testing with Mocha"
	@NODE_ENV=test $(mocha)

cov:
	@echo "[INFO] Testing with Nyc and Mocha"
	@NODE_ENV=test \
	nyc $(mocha)

c-install:
	@echo "[INFO] Installing dev Dependencies"
	@yarn install --production=false --registry=https://registry.npm.taobao.org

install:
	@echo "[INFO] Installing dev Dependencies"
	@yarn install --production=false

install-prod:
	@echo "[INFO] Installing Dependencies"
	@yarn install --production=true

install-app:
	@echo "[INFO] Installing app Dependencies"
	@cd app && yarn install --production=true

clean:
ifeq ($(OS), Windows_NT)
	@echo "[INFO] Skipping"
else
	@echo "[INFO] Cleaning dist files"
	@rm -rf dist
	@rm -rf .nyc_output
	@rm -rf coverage
endif
