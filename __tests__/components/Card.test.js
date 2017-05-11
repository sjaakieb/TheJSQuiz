import AppState from '../ignore/store';
import React from 'react';
import { mount } from 'enzyme';
import CountDown from '../../src/components/Card';

const Store = new AppState();

describe('Card', () => {
    it('should work', () => {
        expect(true).toBe(true);
    })
});