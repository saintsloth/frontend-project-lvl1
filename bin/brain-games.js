#!/usr/bin/env node

import cli from 'cli.js';
import even from 'brain-even.js';

const name = cli();
even(name);
