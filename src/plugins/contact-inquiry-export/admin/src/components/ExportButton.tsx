import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@strapi/design-system';
import { Download } from '@strapi/icons';
import { useFetchClient, useNotification } from '@strapi/admin/strapi-admin';

const CONTENT_TYPE_UID = 'api::contact-inquiry.contact-inquiry';

const ExportButton = () => {
  const { slug } = useParams<{ slug: string }>();
  const { get } = useFetchClient();
  const { toggleNotification } = useNotification();
  const [isExporting, setIsExporting] = React.useState(false);

  if (slug !== CONTENT_TYPE_UID) {
    return null;
  }

  const handleExport = async () => {
    setIsExporting(true);

    try {
      const { data } = await get('/contact-inquiry-export/export', {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(data as Blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `contact-inquiries-${new Date().toISOString().slice(0, 10)}.xlsx`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toggleNotification({
        type: 'danger',
        message: 'Could not export contact inquiries. Please try again.',
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      startIcon={<Download />}
      variant="secondary"
      onClick={handleExport}
      loading={isExporting}
    >
      Export to Excel
    </Button>
  );
};

export { ExportButton };
