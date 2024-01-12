import { Serializer as ГруппыВозрастSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-ispravl-группы-возраст';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГруппыВозрастSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
