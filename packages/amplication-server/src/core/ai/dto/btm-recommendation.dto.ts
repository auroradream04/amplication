import { Field, ObjectType } from "@nestjs/graphql";
import { BtmResourceRecommendation } from "./btm-resource-recommendation.dto";

@ObjectType({
  isAbstract: true,
})
export class BtmRecommendation {
  @Field(() => String, {
    nullable: false,
  })
  actionId!: string;

  @Field(() => BtmResourceRecommendation, {
    nullable: false,
    description: "The resources (microservices) generated by the ai",
  })
  resources!: BtmResourceRecommendation[];
}
