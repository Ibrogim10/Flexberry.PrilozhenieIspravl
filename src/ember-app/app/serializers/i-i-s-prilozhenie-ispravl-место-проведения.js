import { Serializer as МестоПроведенияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-ispravl-место-проведения';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МестоПроведенияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
