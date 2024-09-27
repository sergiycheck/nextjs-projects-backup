import editIcon from '@iconify-icons/ion/pencil-sharp';
import deleteIcon from '@iconify-icons/ion/trash-outline';
import { Button, Link as ButtonLink, ButtonVariant } from '@shipfast/webapp-core/components/buttons';
import { Icon } from '@shipfast/webapp-core/components/icons';
import { Popover, PopoverContent, PopoverTrigger } from '@shipfast/webapp-core/components/popover';
import { useGenerateLocalePath } from '@shipfast/webapp-core/hooks';
import { cn } from '@shipfast/webapp-core/lib/utils';
import { MouseEvent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { RoutesConfig } from '../../../../../config/routes';

export type CrudDropdownMenuProps = {
  itemId: string;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
  className?: string;
};

export const CrudDropdownMenu = ({ itemId, className, handleDelete, loading }: CrudDropdownMenuProps) => {
  const intl = useIntl();
  const generateLocalePath = useGenerateLocalePath();

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant="ghost"
          className="flex flex-col"
          data-testid="toggle-button"
          aria-label={intl.formatMessage({
            defaultMessage: 'Open item actions',
            id: 'CrudDemoItemList.Open item actions',
          })}
        >
          <div className="block w-1 h-1 rounded-[50%] my-0.5 bg-slate-400 shrink-0" />
          <div className="block w-1 h-1 rounded-[50%] my-0.5 bg-slate-400 shrink-0" />
          <div className="block w-1 h-1 rounded-[50%] my-0.5 bg-slate-400 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn('p-1', className)}>
        <div className="flex flex-col">
          <ButtonLink
            variant={ButtonVariant.GHOST}
            to={generateLocalePath(RoutesConfig.crudDemoItem.edit, { id: itemId })}
            icon={<Icon size={14} icon={editIcon} />}
            className="justify-start mb-2"
          >
            <FormattedMessage id="CrudDemoItem list / Edit link" defaultMessage="Edit" />
          </ButtonLink>
          <Button
            variant="ghost"
            onClick={handleDelete}
            disabled={loading}
            className="justify-start"
            icon={<Icon size={14} icon={deleteIcon} />}
          >
            <FormattedMessage id="CrudDemoItem list / Delete button" defaultMessage="Delete" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
