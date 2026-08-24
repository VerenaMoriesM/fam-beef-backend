import { ExportButton } from './components/ExportButton';

export default {
  register(app: any) {
    app.getPlugin('content-manager').injectComponent('listView', 'actions', {
      name: 'contact-inquiry-export-button',
      Component: ExportButton,
    });
  },
};
