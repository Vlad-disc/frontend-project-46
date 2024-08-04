#!/usr/bin/env node
import { program } from 'commander';
import fs from 'fs';
import path from 'path';
import parseFile from './parser.js';
import genDiff from './diff.js';

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, options) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);

    const file1 = parseFile(absolutePath1);
    const file2 = parseFile(absolutePath2);

    const diff = genDiff(file1, file2);
    console.log(diff);
  });

program.parse(process.argv);