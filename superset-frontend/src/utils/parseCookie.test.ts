/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import parseCookie from 'src/utils/parseCookie';

describe('parseCookie', () => {
  let cookieVal = '';
  Object.defineProperty(document, 'cookie', {
    get: jest.fn().mockImplementation(() => cookieVal),
  });
  it('parses cookie strings', () => {
    cookieVal = 'val1=foo; val2=bar';
    expect(parseCookie()).toEqual({ val1: 'foo', val2: 'bar' });
  });

  it('parses empty cookie strings', () => {
    cookieVal = '';
    expect(parseCookie()).toEqual({});
  });

  it('accepts an arg', () => {
    expect(parseCookie('val=foo')).toEqual({ val: 'foo' });
  });
});
