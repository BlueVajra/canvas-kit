import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';

export default {
  title: 'Labs|Badge/CSS/',
  decorators: [withReadme(README)],
};

export const Default = () => (
  <>
    <div className="story" style={{display: 'flex'}}>
      <span
        className="wdc-badge"
        role="status"
        aria-live="polite"
        aria-label="new unread notifications"
      ></span>
      <span className="wdc-badge" role="status" aria-live="polite" aria-label="1 new notification">
        1
      </span>
      <span
        className="wdc-badge"
        role="status"
        aria-live="polite"
        aria-label="100 new notifications"
      >
        100
      </span>
      <span
        className="wdc-badge"
        role="status"
        aria-live="polite"
        aria-label="999+ new notifications"
      >
        999+
      </span>
    </div>
    <div className="story" style={{display: 'flex'}}>
      <span
        className="wdc-badge--inverse"
        role="status"
        aria-live="polite"
        aria-label="new unread notifications"
      ></span>
      <span
        className="wdc-badge--inverse"
        role="status"
        aria-live="polite"
        aria-label="1 new notification"
      >
        1
      </span>
      <span
        className="wdc-badge--inverse"
        role="status"
        aria-live="polite"
        aria-label="100 new notifications"
      >
        100
      </span>
      <span
        className="wdc-badge--inverse"
        role="status"
        aria-live="polite"
        aria-label="999+ new notifications"
      >
        999+
      </span>
    </div>
  </>
);
