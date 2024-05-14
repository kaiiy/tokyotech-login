import { build } from "esbuild";
import fs from "fs"
import path from "path"
import prettyBytes from 'pretty-bytes';
import { cyan, green } from 'console-log-colors';
import logSymbols from 'log-symbols';

/** @type {import('esbuild').BuildOptions} */
const options = {
    entryPoints: ["./src/index.ts"],
    minify: false,
    bundle: true,
    outfile: "./dist/index.js",
    target: "es2022",
    platform: "browser",
    format: "esm",
    sourcemap: false,
};


build(options)
    .catch((err) => {
        console.error(err)
        process.exit(1);
    })
    .then(() => {
        const distSize = fs.statSync(path.resolve(options.outfile)).size
        console.log(options.outfile, "|", cyan(prettyBytes(distSize, { space: false })))
        console.log(logSymbols.success, green('Finished successfully!'));
    });
