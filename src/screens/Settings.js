import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Input, Select } from '../components';
import { SettingsService } from '../services';
import './Settings.css';

export default () => {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (!settings.length) {
      SettingsService.fetchSettings().then(settings => setSettings(settings));
    }
  });

  async function onSubmit(e) {
    e.preventDefault();
    const newSettings = await SettingsService.updateSettings(settings);
    setSettings(newSettings)
  }

  function onSettingChange(changedSetting, newValue) {
    setSettings(
      settings.map(setting => {
        if (setting.id === changedSetting.id) {
          console.log(setting.value, newValue);
          return { ...setting, value: newValue };
        }

        return setting;
      })
    );
  }

  return (
    <form onSubmit={onSubmit}>
      {settings.map(setting => {
        switch (setting.type) {
          case 'string':
            return (
              <Input
                id={setting.id}
                key={setting.id}
                value={setting.value}
                onChange={value => onSettingChange(setting, value)}
              >
                {setting.name}
              </Input>
            );
          case 'boolean':
            return (
              <Checkbox
                id={setting.id}
                key={setting.id}
                value={setting.value}
                onChange={value => onSettingChange(setting, value)}
              >
                {setting.name}
              </Checkbox>
            );
          case 'array':
            return (
              <Select
                id={setting.id}
                key={setting.id}
                options={setting.options}
                value={setting.value}
                onChange={value => onSettingChange(setting, value)}
              >
                {setting.name}
              </Select>
            );
          default:
            return <div>This setting type is unsupported!</div>;
        }
      })}
      <Button type="submit">Save changes</Button>
    </form>
  );
};
