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
import React from 'react';
import Gravatar from 'react-gravatar';
import { mount } from 'enzyme';
import UserInfo from 'src/profile/components/UserInfo';

import { user } from './fixtures';

describe('UserInfo', () => {
  const mockedProps = {
    user,
  };
  it('is valid', () => {
    expect(React.isValidElement(<UserInfo {...mockedProps} />)).toBe(true);
  });
  it('renders a Gravatar', () => {
    const wrapper = mount(<UserInfo {...mockedProps} />);
    expect(wrapper.find(Gravatar)).toExist();
  });
  it('renders a Panel', () => {
    const wrapper = mount(<UserInfo {...mockedProps} />);
    expect(wrapper.find('.panel')).toExist();
  });
  it('renders 5 icons', () => {
    const wrapper = mount(<UserInfo {...mockedProps} />);
    expect(wrapper.find('i')).toHaveLength(5);
  });
  it('renders roles information', () => {
    const wrapper = mount(<UserInfo {...mockedProps} />);
    expect(wrapper.find('.roles').text()).toBe(' Alpha, sql_lab');
  });
  it('shows the right user-id', () => {
    const wrapper = mount(<UserInfo {...mockedProps} />);
    expect(wrapper.find('.user-id').text()).toBe('5');
  });
});
