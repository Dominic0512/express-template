import mongoose from 'mongoose';
import sinon from 'sinon';
import chai from 'chai';
import supertest from 'supertest';
import app from '../server';

global.sinon = sinon;
global.mongoose = mongoose;
global.expect = chai.expect;
global.request = supertest(app);
