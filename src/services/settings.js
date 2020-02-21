import axios from 'axios';

export default {
  client: axios.create({ baseURL: 'http://localhost:3000' }),

  async fetchSettings() {
    const response = await this.client.get('/settings');
    return response.data;
  },

  async updateSettings(settings) {
    const response = await this.client.put('/settings', settings);
    return response.data;
  }
};
