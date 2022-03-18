import { DetailBar, ListBar } from "../../shared/components";
import { AddUnicorn } from "../../shared/components/crud";
import { BaseLayout } from "../../shared/layouts";

export const Add = () => {
  return (
    <BaseLayout
      title={"Add"}
      listBar={
        <DetailBar
          showButtonNew
          showButtonSaveAndReturn
          btnSaveAndReturnLoading
          showButtonReturn={false}
        />
      }
    >
      <AddUnicorn />
    </BaseLayout>
  );
};
